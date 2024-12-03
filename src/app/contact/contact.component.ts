import { Component, Input } from '@angular/core';
import content from '../../assets/content/contact_content.json';

@Component({
  selector: 'comp-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  headingContent: any;
  formContent: any;
  contactUsContent: any;

  constructor() {
    this.headingContent = content.heading;
    this.formContent = content.form;
    this.contactUsContent = content.contact_us;
  }
}
