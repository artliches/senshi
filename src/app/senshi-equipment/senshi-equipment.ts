import { Component, input } from '@angular/core';

@Component({
  selector: 'app-senshi-equipment',
  imports: [],
  templateUrl: './senshi-equipment.html',
  styleUrl: './senshi-equipment.scss',
})
export class SenshiEquipment {
  triggerReroll = input<boolean>();
}
