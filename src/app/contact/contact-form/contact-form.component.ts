import { Component, Input, OnInit } from '@angular/core';
import ContactFormClass from '../../models/contact_us/contactForm';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'comp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent implements OnInit {
  @Input() content: any;
  submitted: boolean = false;

  model = new ContactFormClass('name', 'email', 'phone', 'message');

  public contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl<string | null>(''),
    phone: new FormControl<string | null>(null),
    value: new FormControl<string | null>(null),
    message: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }
}
