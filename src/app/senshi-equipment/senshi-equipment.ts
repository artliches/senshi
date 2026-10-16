import { Component, effect, inject, input } from '@angular/core';
import { RandomNumber } from '../random-number';
import { AbililtyValuesObj, ArmorObj, ScrollsObj, StartingEquipmentObj } from '../../../public/assets/models/senshi-interfaces';
import { ARMORS, BACKPACK, ITEMS, SHINTAI_TEXTS, UNSEEN_TEXTS, WEAPONS } from '../../../public/assets/senshi.constants';

@Component({
  selector: 'app-senshi-equipment',
  imports: [],
  templateUrl: './senshi-equipment.html',
  styleUrl: './senshi-equipment.scss',
})
export class SenshiEquipment {
  private randomNumberService = inject(RandomNumber);

  isSumoSignal = input<boolean>();
  currentJobAbilityValues = input.required<AbililtyValuesObj[]>();
  currentJobStartingEquipment = input<StartingEquipmentObj[]>();
  triggerReroll = input<boolean>();

  abilityValues: AbililtyValuesObj[] = [];
  startingEquipment: StartingEquipmentObj[] = [];

  backpackObj: {item: string, descrip: string} = {} as {item: string, descrip: string};
  itemsArray: StartingEquipmentObj[] = [];
  weaponsArray: StartingEquipmentObj[] = [];
  weaponsArrayIndex = WEAPONS.slice(0);
  currentArmor: ArmorObj = {} as ArmorObj;
  armorArrayIndex: ArmorObj[] = ARMORS.slice(0);
  scrollsArray: ScrollsObj[] = [];

  constructor() {
    effect(() => {
      if (this.startingEquipment !== this.currentJobStartingEquipment()) {
        this.getInitialEquipment();
        this.backpackObj = this.randomNumberService.shuffle(BACKPACK)[0];
      }

      if (this.abilityValues !== this.currentJobAbilityValues()) {
        this.getAbilityValuesAndAddModifiers();
      }
    });
  }

  private getAbilityValuesAndAddModifiers() {
    this.abilityValues = this.currentJobAbilityValues();
    //check if any equipment is affected by modifiers?
    this.itemsArray.forEach(item => {
      if (item.die && item.die.indexOf('+') !== -1) {
        let modifier = 0;
        modifier = this.getModifer(item.die, 0);
        item.value = item.rolledResult! + modifier < 0 ? 0 : item.rolledResult! + modifier;
      }
    });

    this.weaponsArray.forEach(weapon => {
      if (weapon.die && weapon.die.indexOf('+') !== -1) {
        let modifier = 0;
        modifier = this.getModifer(weapon.die, 0);
        weapon.value = weapon.rolledResult! + modifier < 0 ? 0 : weapon.rolledResult! + modifier;
      }
    });
  }

  private getInitialEquipment() {
    this.weaponsArrayIndex = WEAPONS.slice(0);
    this.startingEquipment = this.currentJobStartingEquipment()!;
    this.currentArmor = {} as ArmorObj;
    this.scrollsArray = [];

    this.itemsArray = this.startingEquipment.filter(item => item.type === 'item' || item.type === 'scroll');
    //get additional item
    this.itemsArray.splice(
      this.itemsArray.findIndex(item => item.item.includes('food')), 0, this.randomNumberService.shuffle(ITEMS)[0]
    );

    this.weaponsArray = this.startingEquipment.filter(weapon => weapon.type === 'weapon');
    this.weaponsArray.push(this.randomNumberService.shuffle(this.weaponsArrayIndex)[0]);
    this.getStartingArmor();
    this.getInitialScrolls();

    //check if we need to roll die
    this.itemsArray.forEach(item => {
      if ((Number.isFinite(item.value)) && item.die) {
        this.rollItemDie(item);
      }
    });

    this.weaponsArray.forEach(weapon => {
      if (Number.isFinite(weapon.value) && weapon.die) {
        this.rollItemDie(weapon);
      }
    });

    this.replaceWeaponIfScrollInvalid();
  }

  private getInitialScrolls() {
    const rawScrolls = this.itemsArray.filter(scroll => scroll.type === 'scroll');
    if (rawScrolls.length > 0) {
      //we've got scrolls, find out what type
      rawScrolls.forEach(scroll => {
        if (scroll.item.toLowerCase().split('unseen').length - 1 > 0) {
          const numUnseenScrolls = scroll.item.toLowerCase().split('unseen').length - 1;
          this.randomNumberService.shuffle(UNSEEN_TEXTS);
          for (let i = 0; i <= numUnseenScrolls - 1; i++) {
            this.scrollsArray.push({
              name: UNSEEN_TEXTS[i].name,
              descrip: UNSEEN_TEXTS[i].descrip,
              type: 'unseen'
            });
          }
        }

        if (scroll.item.toLowerCase().split('shintai').length - 1 > 0) {
          const numShintaiScrolls = scroll.item.toLowerCase().split('shintai').length - 1;
          this.randomNumberService.shuffle(SHINTAI_TEXTS);
          for (let i = 0; i <= numShintaiScrolls - 1; i++) {
            this.scrollsArray.push({
              name: SHINTAI_TEXTS[i].name,
              descrip: SHINTAI_TEXTS[i].descrip,
              type: 'shintai'
            });
          }
        }
      });
    }
  }

  private getStartingArmor() {
    const startingEquipArmor: { item: string; type: string; die: string; } = this.startingEquipment.filter(armor => armor.type === 'armor')[0];
    if (startingEquipArmor) {
      if (startingEquipArmor.die) {
        this.currentArmor = ARMORS[ARMORS.findIndex(armor => armor.tier === Number(startingEquipArmor.die))];
        if (this.currentArmor.armorStyles) {
          this.currentArmor.armorStyles.forEach(armor => armor.chosen = false);
          this.currentArmor.armorStyles[this.randomNumberService.getRandomNumber(0, this.currentArmor.armorStyles!.length - 1)].chosen = true;
        }
        this.currentArmor.rerollable = false;
      } else {
        this.currentArmor.tier = 1;
        this.currentArmor.descrip = ARMORS[ARMORS.findIndex(armor => armor.tier === 1)].descrip;
        this.currentArmor.armorStyles = [{
          name: startingEquipArmor.item,
          descrip: '',
          chosen: true,
        }];
        this.currentArmor.rerollable = false;
      }
    } else {
      //no natural starting armor, get some but check for scrolls too
      this.rerollArmorTier();
    }
  }

  private rollItemDie(item: StartingEquipmentObj) {
    let modifier = 0;
    const die = this.randomNumberService.splitDie(item.die);

    modifier = this.getModifer(item.die, modifier);
    item.rolledResult = this.randomNumberService.getRandomNumber(die.dieNum, die.dieSize);
    item.value = item.rolledResult + modifier < 0 ? 0 : item.rolledResult + modifier;

    // we have the initial item value, now we need to insert it nicely into the item
    let bracketPositions: { left: number; right: number; };
    if (item.descrip) {
      bracketPositions = this.getBracketPosition(item.descrip);

      item.descrip = `${item.descrip.slice(0, bracketPositions.left)}[${item.die}]${item.descrip.slice(bracketPositions.right + 1)}`;
    } else {
      bracketPositions = this.getBracketPosition(item.item);
      item.item = `${item.item.slice(0, bracketPositions.left)}[${item.die}]${item.item.slice(bracketPositions.right + 1)}`;
    }
  }

  changeArmorStyle() {
    this.currentArmor.armorStyles?.forEach(armor => armor.chosen = !armor.chosen);
  }

  rerollAll() {
      this.getInitialEquipment();
      this.backpackObj = this.randomNumberService.shuffle(BACKPACK)[0];
      this.getAbilityValuesAndAddModifiers();
  }

  rerollAllScrolls() {
    for (let i = 0; i < this.scrollsArray.length; i++) {
      const currScroll = this.scrollsArray[i];
      if (currScroll.type === 'unseen') {
        this.scrollsArray[i] = this.rerollScroll(currScroll, UNSEEN_TEXTS, 'unseen');
      } else if (currScroll.type === 'shintai') {
        this.scrollsArray[i] = this.rerollScroll(currScroll, SHINTAI_TEXTS, 'shintai');
      }
    }
  }

  private rerollScroll(currScroll: ScrollsObj, scrollArray: {name: string, descrip: string}[], scrollType: string): ScrollsObj {
      const scrollsOfMatchingType = this.scrollsArray.filter(scroll => scroll.type === scrollType);
      const indexesToSkip: number[] = [];
      scrollsOfMatchingType.forEach(scrollObj => indexesToSkip.push(scrollArray.findIndex(scroll => scroll.name === scrollObj.name)));
      
      let currIndex = scrollArray.findIndex(scroll => scroll.name === currScroll.name);
      do {
        currIndex = currIndex + 1 > scrollArray.length - 1 ? 0: currIndex + 1;
      } while (indexesToSkip.includes(currIndex));

      return {
        name: scrollArray[currIndex].name,
        descrip: scrollArray[currIndex].descrip,
        type: scrollType
      };
  }

  rerollIndividualScroll(scrollObj: ScrollsObj): ScrollsObj {
    if (scrollObj.type === 'unseen') {
      return this.rerollScroll(scrollObj, UNSEEN_TEXTS, 'unseen');
    } else {
      return this.rerollScroll(scrollObj, SHINTAI_TEXTS, 'shintai');
    }
  }

  rerollArmorTier() {
      const hasScroll = this.itemsArray.some(item => item.type === 'scroll');
      this.armorArrayIndex = hasScroll ? ARMORS.slice(0, 2) : ARMORS.slice(0);
      this.currentArmor = this.randomNumberService.shuffle(this.armorArrayIndex.slice(0))[0];
      if (this.currentArmor.armorStyles) {
        this.currentArmor.armorStyles.forEach(armor => armor.chosen = false);
        this.currentArmor.armorStyles[this.randomNumberService.getRandomNumber(0, this.currentArmor.armorStyles!.length - 1)].chosen = true;
      }
      this.currentArmor.rerollable = true;
  }

  rerollBackpack() {
    let newIndex = BACKPACK.findIndex(val => val.descrip === this.backpackObj.descrip);
    const isEndOfArray = BACKPACK.length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;
    this.backpackObj = BACKPACK[newIndex];
  }

  rerollDie(itemObj: StartingEquipmentObj): number {
    const dieObj = this.randomNumberService.splitDie(itemObj.die);
    const modifier = this.getModifer(itemObj.die, 0);
    
    itemObj.rolledResult = this.randomNumberService.getRandomNumber(dieObj.dieNum, dieObj.dieSize);

    return itemObj.rolledResult + modifier;
  }

  rerollItem() {
    let newItem;
    const itemToRerollIndex = this.itemsArray.findIndex(item => item.rerollable);
    const wasScroll = this.itemsArray[itemToRerollIndex].type === 'scroll';
    let newIndex = ITEMS.findIndex(val => val.item === this.itemsArray[itemToRerollIndex].item);
    const isEndOfArray = ITEMS.length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;
    newItem = ITEMS[newIndex];

    //need to check if new item needs to roll die
    if (Number.isFinite(newItem.value) && newItem.die) this.rollItemDie(newItem);
    this.itemsArray[itemToRerollIndex] = newItem;

    if (wasScroll) this.scrollsArray.pop();
    //check if item is a scroll
    if (this.itemsArray[itemToRerollIndex].type === 'scroll') this.addNewScroll();

    this.replaceWeaponIfScrollInvalid();
    //check if armor is invalid
    if (this.currentArmor.rerollable && this.itemsArray.some(item => item.type === 'scroll')) {
      if (this.currentArmor.tier >= 2) {
        this.rerollArmorTier();
      }
    }
  }

  private addNewScroll() {
    const isUnseenScroll: boolean = this.itemsArray[this.itemsArray.findIndex(scroll => scroll.type === 'scroll')].item.toLowerCase().includes('unseen');
    const scrollType = isUnseenScroll ? 'unseen' : 'shintai';
    const scrollArray: { name: string; descrip: string; }[] = isUnseenScroll ? UNSEEN_TEXTS : SHINTAI_TEXTS;
    const scrollsOfMatchingType = this.scrollsArray.filter(scroll => scroll.type === scrollType);
    const indexesToSkip: number[] = [];

    scrollsOfMatchingType.forEach(scrollObj => indexesToSkip.push(scrollArray.findIndex(scroll => scroll.name === scrollObj.name)));

    let currIndex = 0;
    do {
      currIndex = currIndex + 1 > this.scrollsArray.length - 1 ? 0 : currIndex + 1;
    } while (indexesToSkip.includes(currIndex));

    this.scrollsArray.push({
      name: scrollArray[currIndex].name,
      descrip: scrollArray[currIndex].descrip,
      type: scrollType,
    });
  }

  private replaceWeaponIfScrollInvalid() {
    const hasScroll = this.itemsArray.some(item => item.type === 'scroll');
    if (hasScroll) {
      //check if last weapon is within the first six
      //if not, replace with one of the first six
      const currentRolledWeapon = this.weaponsArray[this.weaponsArray.length - 1];
      const currentRolledWeaponIndex = WEAPONS.findIndex(weapon => weapon.item === currentRolledWeapon.item);
      const isScrollValidWeapon = currentRolledWeaponIndex <= 5;

      if (!isScrollValidWeapon) {
        this.weaponsArray[this.weaponsArray.length - 1] = WEAPONS.slice(0)[this.randomNumberService.getRandomNumber(0, 5)];
        if (Number.isFinite(this.weaponsArray[this.weaponsArray.length - 1].value) && this.weaponsArray[this.weaponsArray.length - 1].die) {
          this.rollItemDie(this.weaponsArray[this.weaponsArray.length - 1]);
        }
      }
    }
  }

  rerollWeapon() {
    let newWeapon;
    let newIndex = this.weaponsArrayIndex.findIndex(val => val.item === this.weaponsArray[this.weaponsArray.length - 1].item);
    const isEndOfArray = this.weaponsArrayIndex.length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;
    newWeapon = this.weaponsArrayIndex[newIndex];

    if (Number.isFinite(newWeapon.value) && newWeapon.die) this.rollItemDie(newWeapon);
    this.weaponsArray[this.weaponsArray.length - 1] = newWeapon;

    this.replaceWeaponIfScrollInvalid();
  }

  private getBracketPosition(stringToParse: string): {left: number, right: number} {
    return {
      left: stringToParse.indexOf('['),
      right: stringToParse.indexOf(']')
    };
  }

  private getModifer(die: string, modifier: number) {
    if (die.indexOf('+') >= 0) {
      const modifierName = die.slice(0, die.indexOf('+')).toLowerCase();
      modifier = this.currentJobAbilityValues()![this.currentJobAbilityValues()!.findIndex(value => value.name === modifierName)].value;
    }
    return modifier;
  }
}
