import { Component, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RandomNumber } from '../random-number';
import { AbililtyValuesObj, StartingEquipmentObj } from '../../../public/assets/models/senshi-interfaces';

@Component({
  selector: 'app-senshi-equipment',
  imports: [],
  templateUrl: './senshi-equipment.html',
  styleUrl: './senshi-equipment.scss',
})
export class SenshiEquipment implements OnInit, OnChanges {
  private randomNumberService = inject(RandomNumber);

  currentJobAbilityValues = input<AbililtyValuesObj[]>();
  currentJobStartingEquipment = input<StartingEquipmentObj[]>();
  triggerReroll = input<boolean>();

  itemsArray: StartingEquipmentObj[] = [];

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges<SenshiEquipment>): void {
    if (changes.currentJobStartingEquipment) {
      //get items
      this.itemsArray = this.currentJobStartingEquipment()!.filter(item => item.type === 'item' || item.type === 'scroll');
      // check if we need to roll die
      this.itemsArray.forEach(item => {
        if (item.value === 0 && item.die) {
          const die = this.randomNumberService.splitDie(item.die);
          let modifier = 0;
          modifier = this.getModifer(item.die, modifier);
          item.value = this.randomNumberService.getRandomNumber(die.dieNum, die.dieSize) + modifier;

          if (item.descrip) {
            const leftBracketPosition = item.descrip.indexOf('[');
            const rightBracketPosition = item.descrip.indexOf(']');

            item.descrip = `${item.descrip.slice(0, leftBracketPosition)}[${item.die}]${item.descrip.slice(rightBracketPosition + 1)}`
            const leftString = item.descrip.slice(0, leftBracketPosition);
            const rightString = item.descrip.slice(leftBracketPosition);
            item.splitDescripObj = {
              leftString: leftString,
              rightString: rightString,
            };
          } else {
            //add die to bracket
            const leftBracketPosition = item.item.indexOf('[');
            const rightBracketPosition = item.item.indexOf(']');

            item.item = `${item.item.slice(0, leftBracketPosition)}[${item.die}]${item.item.slice(rightBracketPosition + 1)}`

            //split string along brackets
            const leftString = item.item.slice(0, leftBracketPosition);
            const rightString = item.item.slice(leftBracketPosition);
            item.splitStringObj = {
              leftString: leftString,
              rightString: rightString,
            };
          }
        }
      });
    }

    // if (changes.currentJobAbilityValues) {
    //   console.log(changes);
    // }
  }

  private getModifer(die: string, modifier: number) {
    if (die.indexOf('+') >= 0) {
      const modifierName = die.slice(0, die.indexOf('+')).toLowerCase();
      modifier = this.currentJobAbilityValues()![this.currentJobAbilityValues()!.findIndex(value => value.name === modifierName)].value;
    }
    return modifier;
  }

  rerollDie(die: string): number {
    const dieObj = this.randomNumberService.splitDie(die);
    const modifier = this.getModifer(die, 0);
    return this.randomNumberService.getRandomNumber(dieObj.dieNum, dieObj.dieSize) + modifier;


  }
}
