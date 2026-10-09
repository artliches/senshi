import { Component, signal, WritableSignal } from '@angular/core';
import { SenshiIntro } from './senshi-intro/senshi-intro';
import { SenshiJob } from './senshi-job/senshi-job';
import { AbililtyValuesObj, JobObj } from '../../public/assets/models/senshi-interfaces';
import { SenshiHonour } from './senshi-honour/senshi-honour';
import { SenshiAbilities } from './senshi-abilities/senshi-abilities';
import { SenshiDescriptions } from './senshi-descriptions/senshi-descriptions';
import { SenshiEquipment } from './senshi-equipment/senshi-equipment';

@Component({
  selector: 'app-root',
  imports: [SenshiIntro, SenshiJob, SenshiHonour, SenshiAbilities, SenshiAbilities, SenshiDescriptions, SenshiEquipment],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  currentJob: WritableSignal<JobObj> = signal({} as JobObj);
  triggerReroll: WritableSignal<boolean> = signal(false);
  showRolls: WritableSignal<boolean> = signal(false);
  abilityValuesSignal: WritableSignal<AbililtyValuesObj[]> = signal([]);

  rerollAll() {
    this.triggerReroll.set(!this.triggerReroll());
  }

  getNewJob(jobObj: JobObj) {
    this.currentJob.set(jobObj);
  }

  setAbilityValues(abilityValuesArray: AbililtyValuesObj[]) {
    this.abilityValuesSignal.set(abilityValuesArray);
  }

  toggleRolls() {
    this.showRolls.set(!this.showRolls());
  }
}
