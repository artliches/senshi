import { Component, input } from '@angular/core';
import { TenantsObj } from '../../../public/assets/models/senshi-interfaces';

@Component({
  selector: 'app-senshi-honour',
  imports: [],
  templateUrl: './senshi-honour.html',
  styleUrl: './senshi-honour.scss',
})
export class SenshiHonour {
  currentTenants = input<TenantsObj>();
}
