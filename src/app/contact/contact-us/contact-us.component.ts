import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  @Input() content: any;
}
