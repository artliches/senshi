import { Component, inject, input, OnChanges, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { AFFLICTIONS, BROKEN_BODIES, CHRONICLES, HABITS } from '../../../public/assets/senshi.constants';
import { RandomNumber } from '../random-number';

@Component({
  selector: 'app-senshi-descriptions',
  imports: [],
  templateUrl: './senshi-descriptions.html',
  styleUrl: './senshi-descriptions.scss',
})
export class SenshiDescriptions implements OnChanges {
  private randomNumberService = inject(RandomNumber);
  triggerReroll = input<any>();

  bodyArray = BROKEN_BODIES;
  chronicleArray = CHRONICLES;
  habitArray = HABITS;
  afflictionArray = AFFLICTIONS;

  bodySignal: WritableSignal<string> = signal(this.randomNumberService.shuffle(this.bodyArray)[0]);
  chronicleSignal: WritableSignal<string> = signal(this.randomNumberService.shuffle(this.chronicleArray)[0]);
  habitSignal: WritableSignal<string> = signal(this.randomNumberService.shuffle(this.habitArray)[0]);
  afflictionSignal: WritableSignal<string> = signal(this.randomNumberService.shuffle(this.afflictionArray)[0]);

  allAttributesArray = [
    {
      attSignal: this.chronicleSignal,
      attArray: this.chronicleArray, 
      descrip: 'grim chronicle'
    },
    {
      attSignal: this.bodySignal,
      attArray: this.bodyArray, 
      descrip: 'broken body'
    },
    {
      attSignal: this.habitSignal,
      attArray: this.habitArray, 
      descrip: 'bad habit'
    },
    {
      attSignal: this.afflictionSignal,
      attArray: this.afflictionArray,
      descrip: 'awful affliction' 
    },
  ];

  ngOnChanges(changes: SimpleChanges<SenshiDescriptions>): void {
    if (changes.triggerReroll) {
      this.allAttributesArray.forEach(att => this.randomNumberService.shuffle(att.attArray));
      this.rerollAll();
    }
  }

  rerollAttribute(attributeSignal: WritableSignal<any>, attributeArray: string[]) {
    let newIndex = attributeArray.indexOf(attributeSignal());
    const isEndOfArray = attributeArray.length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;
    
    attributeSignal.set(attributeArray[newIndex]);
  }

  rerollAll() {
    this.allAttributesArray.forEach(att => this.rerollAttribute(att.attSignal, att.attArray));
  }
}
