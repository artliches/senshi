import { afterNextRender, AfterViewChecked, Component, OnInit, signal, WritableSignal } from '@angular/core';
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
export class App implements OnInit, AfterViewChecked {
  currentJob: WritableSignal<JobObj> = signal({} as JobObj);
  triggerReroll: WritableSignal<boolean> = signal(false);
  showRolls: WritableSignal<boolean> = signal(false);
  abilityValuesSignal: WritableSignal<AbililtyValuesObj[]> = signal([]);
  hasHonourOrDishonour: WritableSignal<boolean|null> = signal(null);

  currentHeight: number = 0;

  ngOnInit(): void {
    this.rerollAll();
  }

  ngAfterViewChecked(): void {
    // if (window.self !== window.top) this.getCurrentHeight(); 
  }

  rerollAll() {
    this.triggerReroll.set(!this.triggerReroll());
    if (window.self !== window.top) this.getCurrentHeight();
  }

  getNewJob(jobObj: JobObj) {
    this.currentJob.set(jobObj);
  }

  setAbilityValues(abilityValuesArray: AbililtyValuesObj[]) {
    this.abilityValuesSignal.set([...abilityValuesArray]);
  }

  toggleRolls() {
    this.showRolls.set(!this.showRolls());
  }

  setHonourOrDishonourToggles(hasHonourOrDishonour: boolean) {
    if (this.hasHonourOrDishonour() === hasHonourOrDishonour) this.hasHonourOrDishonour.set(null);
    else this.hasHonourOrDishonour.set(hasHonourOrDishonour);
  }

  print() {
    window.print();
  }

  private getCurrentHeight() {
    console.log('getCurrentHeight()');
    const senshiElement = document.getElementById('senshi-main-layout');
    // senshiElement!.style.height = 'auto';
    this.currentHeight = senshiElement?.scrollHeight ? senshiElement.scrollHeight : this.currentHeight;
    console.log(this.currentHeight, senshiElement?.scrollHeight);

    window.parent.postMessage({
      height: this.currentHeight,
    }, "*");
  }
}
