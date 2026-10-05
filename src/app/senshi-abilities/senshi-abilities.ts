import { Component, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbilityObj, JobObj, StatsObj } from '../../../public/assets/models/senshi-interfaces';
import { RandomNumber } from '../random-number';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-senshi-abilities',
  imports: [UpperCasePipe],
  templateUrl: './senshi-abilities.html',
  styleUrl: './senshi-abilities.scss',
})
export class SenshiAbilities implements OnInit, OnChanges {
  private randomNumberService = inject(RandomNumber);
  currentJobStats = input<StatsObj>();
  showRolls = input<boolean>(true);
  abilitiesArray: AbilityObj[] = [
      {
        name: 'swiftness',
        descrip: 'Defend, balance, swim, flee',
        value: 0,
        rolledDie: [],
        modifier: 0,
      },
      {
        name: 'spirit',
        descrip: 'Perceive, aim, charm, wield Texts',
        value: 0,
        rolledDie: [],
        modifier: 0,
      },
      {
        name: 'vigor',
        descrip: 'Crush, lift, strike, grapple',
        value: 0,
        rolledDie: [],
        modifier: 0,
      },
      {
        name: 'resilience',
        descrip: 'Resist poison/cold/heat, survive falling, Parry',
        value: 0,
        rolledDie: [],
        modifier: 0,
      },
  ];

  honourObj: {
    descrip: string,
    value:number,
    rolledDie:number[],
    modifier: number,
  } = {
    descrip: '',
    value: 0,
    rolledDie: [],
    modifier: 0,
  }

  ngOnInit(): void {
    this.abilitiesArray.forEach(ability => {
      ability.modifier = this.currentJobStats()![ability.name as keyof StatsObj];
      this.rerollAbility(ability);
    });

    this.rerollHonour();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['currentJobStats'] && changes['currentJobStats'].previousValue !== undefined) {
      this.rerollAllAbilities();
      this.rerollHonour();
    }
  }

  rerollAbility(ability: AbilityObj) {
    ability.rolledDie = [];
    ability.value = 0;

    //get raw 3d6 rolls
    for (let i = 0; i < 3; i++) {
      ability.rolledDie.push(this.randomNumberService.getRandomNumber(1, 6));
    }

    let rawNumber = ability.rolledDie.reduce(this.reducerFunction, 0) + ability.modifier;
    this.convertRawNumberToAbilityMod(rawNumber, ability);
  }

  rerollAllAbilities() {
    this.abilitiesArray.forEach(ability => this.rerollAbility(ability));
  }

  rerollHonour() {
    this.honourObj.value = 0;
    this.honourObj.rolledDie = [];
    this.honourObj.modifier = this.currentJobStats()!.honour;

    for (let i = 0; i < 3; i++) {
      this.honourObj.rolledDie.push(this.randomNumberService.getRandomNumber(1, 6));
    }

    this.honourObj.value = this.honourObj.rolledDie.reduce(this.reducerFunction, 0) + this.honourObj.modifier;
    this.honourObj.descrip = this.honourObj.value >= 10 ? `honourable` : `dishonourable`;
  }

  private reducerFunction(partialSum: number, currValue: number) {
    return partialSum + currValue;
  }

  private convertRawNumberToAbilityMod(rawNumber: number, ability: AbilityObj) {
    switch (true) {
      case rawNumber <= 4: {
        ability.value = -3;
        break;
      }
      case rawNumber > 4 && rawNumber <= 6: {
        ability.value = -2;
        break;
      }
      case rawNumber > 6 && rawNumber <= 8: {
        ability.value = -1;
        break;
      }
      case rawNumber > 8 && rawNumber <= 12: {
        ability.value = 0;
        break;
      }
      case rawNumber > 12 && rawNumber <= 14: {
        ability.value = 1;
        break;
      }
      case rawNumber > 14 && rawNumber <= 16: {
        ability.value = 2;
        break;
      }
      case rawNumber > 16: {
        ability.value = 3;
        break;
      }
    }
  }
}
