import { afterNextRender, AfterViewChecked, Component, effect, ElementRef, OnInit, signal, viewChild, WritableSignal } from '@angular/core';
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
  senshiElementSignal = viewChild.required<ElementRef>('senshiElement');
  height = signal(0);
  readonly isInIFrame = signal<boolean>(false);

  constructor() {
    effect(() => {
      const senshiElement = this.senshiElementSignal().nativeElement;
      if (senshiElement) {
        const senshiObsever = new ResizeObserver((entries) => {
          for (const entry of entries) {
            // console.log(entry.target.scrollHeight);
            this.height.set(entry.target.scrollHeight);
          }
        });
        senshiObsever.observe(senshiElement);
      }
    });
  }

  ngOnInit(): void {
    this.isInIFrame.set(window.self !== window.top);
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      window.parent.postMessage({
        height: this.height(),
      }, "*");
    }, 500)
  }

  rerollAll() {
    this.triggerReroll.set(!this.triggerReroll());

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
    const senshiElement = document.getElementById('senshi-main-layout');
    senshiElement!.style.height = 'auto';
    this.currentHeight = senshiElement?.scrollHeight ? senshiElement.scrollHeight : this.currentHeight;

    window.parent.postMessage({
      height: this.currentHeight,
    }, "*");
  }
}
