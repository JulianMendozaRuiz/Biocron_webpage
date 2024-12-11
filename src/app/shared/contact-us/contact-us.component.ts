import { Component } from '@angular/core';
import content from '../../../assets/content/contact_us_content.json';

@Component({
  selector: 'comp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  content: any;

  constructor() {
    this.content = content;
  }
}
