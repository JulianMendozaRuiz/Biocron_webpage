import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-contact-heading',
  templateUrl: './contact-heading.component.html',
  styleUrl: './contact-heading.component.scss',
})
export class ContactHeadingComponent {
  @Input() content: any;
}
