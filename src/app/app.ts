import { Component, signal } from '@angular/core';
import { SenshiIntro } from './senshi-intro/senshi-intro';

@Component({
  selector: 'app-root',
  imports: [SenshiIntro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('senshi');
}
