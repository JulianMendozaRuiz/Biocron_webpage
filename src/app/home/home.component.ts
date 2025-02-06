import { Component } from '@angular/core';
// TODO: remove this and centralize to separate service
import content from '../../assets/content/home_content.json';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroContent: any;

  constructor() {
    this.heroContent = content.hero;
  }
}
