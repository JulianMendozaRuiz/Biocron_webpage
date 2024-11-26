import { Component, OnInit } from '@angular/core';
import ContactFormClass from '../../models/contact';

@Component({
  selector: 'comp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  submitted: boolean = false;

  model = new ContactFormClass('name', 'email', 'phone', 'message');

  ngOnInit(): void {
    console.log('current model', this.model);
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
