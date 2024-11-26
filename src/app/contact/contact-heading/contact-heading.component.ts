import { Component, OnInit } from '@angular/core';
import content from '../../../assets/content/contact_content.json';

@Component({
  selector: 'comp-contact-heading',
  templateUrl: './contact-heading.component.html',
  styleUrl: './contact-heading.component.scss',
})
export class ContactHeadingComponent implements OnInit {
  contentObject!: any;
  ngOnInit(): void {
    this.contentObject = content.heading;
  }
}
