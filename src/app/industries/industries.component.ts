import { Component } from '@angular/core';
import content from '../../assets/content/industries_content.json';

@Component({
  selector: 'comp-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  industriesContent: any;

  constructor() {
    this.industriesContent = content;
  }
}
