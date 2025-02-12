import { Component } from '@angular/core';
// TODO: remove this and centralize to separate service
import homeContent from '../../assets/content/home_content.json';
import servicesContent from '../../assets/content/services_content.json';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroContent: any;
  servicesContent: any;

  constructor() {
    this.heroContent = homeContent.hero;
    this.servicesContent = servicesContent.services;
  }
}
