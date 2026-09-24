import { Component, signal, WritableSignal } from '@angular/core';
import { SenshiIntro } from './senshi-intro/senshi-intro';
import { SenshiJob } from './senshi-job/senshi-job';
import { JobObj } from '../../public/assets/models/senshi-interfaces';
import { SenshiHonour } from './senshi-honour/senshi-honour';

@Component({
  selector: 'app-root',
  imports: [SenshiIntro, SenshiJob, SenshiHonour],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  currentJob: WritableSignal<JobObj> = signal({} as JobObj);
  triggerReroll: WritableSignal<boolean> = signal(false);

  rerollAll() {
    this.triggerReroll.set(!this.triggerReroll());
  }

  getNewJob(jobObj: JobObj) {
    this.currentJob.set(jobObj);
  }
}
