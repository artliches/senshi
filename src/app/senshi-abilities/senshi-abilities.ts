import { Component, inject, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { AbililtyValuesObj, AbilityObj, JobObj, StatsObj } from '../../../public/assets/models/senshi-interfaces';
import { RandomNumber } from '../random-number';
import { JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-senshi-abilities',
  imports: [UpperCasePipe],
  templateUrl: './senshi-abilities.html',
  styleUrl: './senshi-abilities.scss',
})
export class SenshiAbilities implements OnInit, OnChanges {
  private randomNumberService = inject(RandomNumber);
  isKitsunetsukai = input<boolean>();
  currentJobStats = input<StatsObj>();
  currentJobRyo = input<string>();
  showRolls = input<boolean>(false);
  abilityValuesEmitter = output<AbililtyValuesObj[]>();

  abilityValuesArray: AbililtyValuesObj[] = [];

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
  };

  hpObj: {
    descrip: string,
    value:number,
    rolledDie:number[],
    modifier: number,
  } = {
    descrip: `
      <div>0: <span class="underline">Broken</span></div>
      <div>Negative: <strong>Dead</strong> (<em>for now</em>)</div>
    `,
    value: 0,
    rolledDie: [],
    modifier: 0,
  };

  virtuesObj: {
    descrip: string,
    value:number,
    rolledDie:number[],
    modifier: number,
  } = {
    descrip: `
    blessings or curses
    `,
    value: 0,
    rolledDie: [],
    modifier: 0,
  };

  ryoObj: {
    descrip: string,
    value:number,
    rolledDie:number[],
    modifier: number,
  } = {
    descrip: `
    cuts as well as any metal
    `,
    value: 0,
    rolledDie: [],
    modifier: 0,
  };

  ryoDieObj = {
    dieNum: 0,
    dieSize: 0
  };


  resilienceValue: number = -5;

  ngOnInit(): void {
    this.abilitiesArray.forEach(ability => {
      ability.modifier = this.currentJobStats()![ability.name as keyof StatsObj];
      this.rerollAbility(ability);
    });

    this.abilityValuesEmitter.emit(this.abilityValuesArray);

    this.rerollHonour();
    this.rerollHP();
    this.rerollVirtues();
    this.rerollRyo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['currentJobStats'] && changes['currentJobStats'].previousValue !== undefined) {
      this.abilitiesArray.forEach(ability => {
        ability.modifier = this.currentJobStats()![ability.name as keyof StatsObj];
        this.rerollAbility(ability);
      });
      
      this.rerollHonour();
      this.rerollHP();
      this.rerollVirtues();
      this.rerollRyo();
    }
  }

  rerollAbility(ability: AbilityObj, singleReroll?: boolean, isRerollAll?: boolean) {
    ability.rolledDie = [];
    ability.value = 0;

    //get raw 3d6 rolls
    for (let i = 0; i < 3; i++) {
      ability.rolledDie.push(this.randomNumberService.getRandomNumber(1, 6));
    }

    let rawNumber = ability.rolledDie.reduce(this.reducerFunction, 0) + ability.modifier;
    this.convertRawNumberToAbilityMod(rawNumber, ability);

    if (this.isKitsunetsukai() && ability.name === 'spirit') {
      this.resilienceValue = ability.value;
      this.adjustHPWithResilienceValue();
    } else if (!this.isKitsunetsukai() && ability.name === 'resilience') {
      //need to adjust HP without rerolling the hpDie
      this.resilienceValue = ability.value;
      this.adjustHPWithResilienceValue();
    }

    //update emitter
    const abilityValueIndex = this.abilityValuesArray.findIndex(value => value.name === ability.name);
    if (abilityValueIndex === -1) {
      //new. add to array
      this.abilityValuesArray.push({
        name: ability.name,
        value: ability.value
      });
    } else {
      //not new, update value
      const isValueDifferent = this.abilityValuesArray[abilityValueIndex].value !== ability.value;
      if (isValueDifferent) {
        this.abilityValuesArray[abilityValueIndex].value = ability.value;
      }

      if (isValueDifferent && singleReroll) {
        this.abilityValuesEmitter.emit(this.abilityValuesArray);
      }
    }
  }

  rerollAllAbilities() {
    this.abilitiesArray.forEach(ability => this.rerollAbility(ability));
    this.abilityValuesEmitter.emit(this.abilityValuesArray);

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

  rerollHP() {
    this.hpObj.value = 0;
    this.hpObj.rolledDie = [];
    this.hpObj.modifier = this.currentJobStats()!.hp;

    this.hpObj.rolledDie.push(this.randomNumberService.getRandomNumber(1, this.hpObj.modifier));
    this.adjustHPWithResilienceValue();
  }

  private adjustHPWithResilienceValue() {
    this.hpObj.value = this.hpObj.rolledDie[0] + this.resilienceValue > 0 ?
      this.hpObj.rolledDie[0] + this.resilienceValue : 1;
  }

  rerollVirtues() {
    this.virtuesObj.value = 0;
    this.virtuesObj.rolledDie = [];
    this.virtuesObj.modifier = this.currentJobStats()!.virtues;

    this.virtuesObj.rolledDie.push(this.randomNumberService.getRandomNumber(1, this.virtuesObj.modifier));
    this.virtuesObj.value = this.virtuesObj.rolledDie[0];
  }

  rerollRyo() {
    this.ryoObj.value = 0;
    this.ryoObj.rolledDie = [];

    this.ryoDieObj.dieNum = Number(this.currentJobRyo()?.slice(0,this.currentJobRyo()?.indexOf('d')));
    this.ryoDieObj.dieSize = Number(this.currentJobRyo()?.slice(this.currentJobRyo()?.indexOf('d')!+1, this.currentJobRyo()?.indexOf('x')));
    const multiplier = Number(this.currentJobRyo()?.slice(this.currentJobRyo()?.indexOf('x')!+1));

    let sumOfRoll: number[] = [];
    for (let i = 0; i < this.ryoDieObj.dieNum; i++) {
      sumOfRoll.push(this.randomNumberService.getRandomNumber(1, this.ryoDieObj.dieSize));
    }
    this.ryoObj.rolledDie.push(sumOfRoll.reduce(this.reducerFunction, 0));
    this.ryoObj.modifier = multiplier;

    this.ryoObj.value = this.ryoObj.rolledDie[0] * this.ryoObj.modifier;
  }

  rerollAll() {
    this.rerollAllAbilities();
    this.rerollHonour();
    this.rerollHP();
    this.rerollVirtues();
    this.rerollRyo();
  }

  private getAbilityValue(abilityName:string): number {
    return this.abilitiesArray[this.abilitiesArray.findIndex(ability => ability.name === abilityName)].value
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
