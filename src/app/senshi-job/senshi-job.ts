import { Component, inject, input, OnChanges, OnInit, output, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { FeaturesObj, JobObj } from '../../../public/assets/models/senshi-interfaces';
import { RandomNumber } from '../random-number';
import { JOBS } from '../../../public/assets/senshi.constants';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-senshi-job',
  imports: [UpperCasePipe],
  templateUrl: './senshi-job.html',
  styleUrl: './senshi-job.scss',
})
export class SenshiJob implements OnInit, OnChanges {
  private randomNumberService = inject(RandomNumber);

  jobArraySignal: WritableSignal<JobObj[]> = signal(this.randomNumberService.shuffle(JOBS));
  jobsObjSignal: WritableSignal<JobObj> = signal(this.jobArraySignal()[0]);
  chosenFeatureSignal: WritableSignal<FeaturesObj> = signal(this.randomNumberService.shuffle(this.jobsObjSignal().features)[0]);
  jobEmitter = output<JobObj>();
  triggerReroll = input<boolean>();

  ngOnInit(): void {
    this.jobEmitter.emit(this.jobsObjSignal());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['triggerReroll'] && changes['triggerReroll'].previousValue !== 'undefined') {
      this.rerollJob();
    }
  }

  rerollJob() {
    let newIndex = this.jobArraySignal().findIndex(job => job.name === this.jobsObjSignal().name);
    const isEndOfArray = this.jobArraySignal().length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;

    this.jobsObjSignal.set(this.jobArraySignal()[newIndex]);
    this.randomNumberService.shuffle(this.jobsObjSignal().features);
    this.rerollFeature();
    this.jobEmitter.emit(this.jobsObjSignal());
  }

  rerollFeature() {
    let newIndex = this.jobsObjSignal().features.findIndex(feature => feature.title === this.chosenFeatureSignal().title);
    const isEndOfArray = this.jobsObjSignal().features.length === newIndex + 1;

    newIndex = isEndOfArray ? 0 : newIndex += 1;

    this.chosenFeatureSignal.set(this.jobsObjSignal().features[newIndex]);
  }
}
