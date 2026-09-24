import { Component, inject, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RandomNumber } from '../random-number';
import {FIRST_NAME, LAST_NAMES, NICKNAMES} from '../../../public/assets/senshi.constants';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-senshi-intro',
  imports: [UpperCasePipe],
  templateUrl: './senshi-intro.html',
  styleUrl: './senshi-intro.scss',
})
export class SenshiIntro implements OnInit, OnChanges {
  private randomNumberService = inject(RandomNumber);
  currentJobName = input<string>('');
  triggerReroll = input<boolean>();

  firstNameArray: string[] = [];
  firstNameObj = {
    descrip: '',
    currValue: -1,
  };

  lastNameArray: string[] = [];
  lastNameObj = {
    descrip: '',
    currValue: -1,
  };

  nickNameArray: string[] = [];
  nickNameObj = {
    descrip: '',
    currValue: -1,
  };

  ngOnInit(): void {
    this.shuffleArrays();
    this.rerollAllObjects();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['triggerReroll'] && changes['triggerReroll'].previousValue !== 'undefined') {
      this.rerollAllObjects();
    }
  }

  rerollAllObjects() {
    this.firstNameObj = this.reroll(this.firstNameArray, this.firstNameObj);
    this.lastNameObj = this.reroll(this.lastNameArray, this.lastNameObj);
    this.nickNameObj = this.reroll(this.nickNameArray, this.nickNameObj);
  }

  private shuffleArrays() {
    this.firstNameArray = this.randomNumberService.shuffle(FIRST_NAME);
    this.lastNameArray = this.randomNumberService.shuffle(LAST_NAMES);
    this.nickNameArray = this.randomNumberService.shuffle(NICKNAMES);
  }

  reroll(constArray: string[], displayObj: {descrip: string, currValue: number}): {descrip: string, currValue: number} {
    const isEndOfArray: boolean = constArray.length === displayObj.currValue + 1;

    if (isEndOfArray) constArray = this.randomNumberService.shuffle(constArray);

    const newValue = isEndOfArray ? 0 : displayObj.currValue + 1;

    return {
      descrip: constArray[newValue],
      currValue: newValue,
    };
  }
}
