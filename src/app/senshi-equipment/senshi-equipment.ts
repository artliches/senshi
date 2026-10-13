import { Component, computed, effect, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RandomNumber } from '../random-number';
import { AbililtyValuesObj, StartingEquipmentObj } from '../../../public/assets/models/senshi-interfaces';
import { JsonPipe } from '@angular/common';

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

  itemsArray: StartingEquipmentObj[] = [];
  weaponsArray: StartingEquipmentObj[] = [];

  constructor() {
    effect(() => {
      // console.log(this.triggerReroll());
      // console.log(this.currentJobAbilityValues());
      // console.log(this.currentJobStartingEquipment());

      if (this.startingEquipment !== this.currentJobStartingEquipment()) {
        this.getInitialEquipment();
      }

      if (this.abilityValues !== this.currentJobAbilityValues()) {
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
    })
  }

  private getInitialEquipment() {
    this.startingEquipment = this.currentJobStartingEquipment()!;

    this.weaponsArray = this.startingEquipment.filter(weapon => weapon.type === 'weapon');
    this.itemsArray = this.startingEquipment.filter(item => item.type === 'item' || item.type === 'scroll');
    //check if we need to roll die
    this.itemsArray.forEach(item => {
      if (item.value === 0 && item.die) {
        this.rollItemDie(item);
      }
    });

    this.weaponsArray.forEach(weapon => {
      if (weapon.value === 0 && weapon.die) {
        this.rollItemDie(weapon);
      }
    })
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

  rerollDie(itemObj: StartingEquipmentObj): number {
    const dieObj = this.randomNumberService.splitDie(itemObj.die);
    const modifier = this.getModifer(itemObj.die, 0);
    
    itemObj.rolledResult = this.randomNumberService.getRandomNumber(dieObj.dieNum, dieObj.dieSize);

    return itemObj.rolledResult + modifier;
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
