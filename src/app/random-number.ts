import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class RandomNumber {
  shuffle(array: Array<any>): Array<any> {
    let i = array.length,
    j = 0,
    temp;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));

      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  rollMultipleDie(numDie: number, dieSize: number): number {
    let sumOfRolls = 0;
    for (let i = 0; i < numDie; i++) {
      sumOfRolls += this.getRandomNumber(1, dieSize);
    }
    return sumOfRolls;
  }

  splitDie(wholeDie: string): {dieNum: number, dieSize: number} {
    const dieNum = Number(wholeDie.slice(0, wholeDie.indexOf('d'))) > 0 || !isNaN(Number(wholeDie.slice(0, wholeDie.indexOf('d')))) ? Number(wholeDie.slice(0, wholeDie.indexOf('d'))) : 1;
    const dieSize = Number(wholeDie.slice(wholeDie.indexOf('d')+1));

    return {
      dieNum: dieNum,
      dieSize: dieSize
    };
  }
}
