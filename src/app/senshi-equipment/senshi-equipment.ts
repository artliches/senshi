import { Component, computed, effect, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RandomNumber } from '../random-number';
import { AbililtyValuesObj, ArmorObj, StartingEquipmentObj } from '../../../public/assets/models/senshi-interfaces';
import { JsonPipe } from '@angular/common';
import { ARMORS, BACKPACK, ITEMS, WEAPONS } from '../../../public/assets/senshi.constants';

@Component({
  selector: 'app-senshi-equipment',
  imports: [JsonPipe],
  templateUrl: './senshi-equipment.html',
  styleUrl: './senshi-equipment.scss',
})
export class SenshiEquipment {
  private randomNumberService = inject(RandomNumber);

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

    this.itemsArray = this.startingEquipment.filter(item => item.type === 'item' || item.type === 'scroll');
    //get additional item
    this.itemsArray.splice(
      this.itemsArray.findIndex(item => item.item.includes('food')), 0, this.randomNumberService.shuffle(ITEMS)[0]
    );

    this.weaponsArray = this.startingEquipment.filter(weapon => weapon.type === 'weapon');
    this.weaponsArray.push(this.randomNumberService.shuffle(this.weaponsArrayIndex)[0]);

    this.getStartingArmor();

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
    let newIndex = ITEMS.findIndex(val => val.item === this.itemsArray[itemToRerollIndex].item);
    const isEndOfArray = ITEMS.length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;
    newItem = ITEMS[newIndex];

    //need to check if new item needs to roll die
    if (Number.isFinite(newItem.value) && newItem.die) this.rollItemDie(newItem);
    this.itemsArray[itemToRerollIndex] = newItem;

    //check if item is a scroll
    this.replaceWeaponIfScrollInvalid();
    //check if armor is invalid
    if (this.currentArmor.rerollable && this.itemsArray.some(item => item.type === 'scroll')) {
      if (this.currentArmor.tier >= 2) {
        this.rerollArmorTier();
      }
    }
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
