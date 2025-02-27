import { Component, Input } from '@angular/core';
import ContactFormClass from '../../models/contactForm';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'comp-home-contact-us',
  templateUrl: './home-contact-us.component.html',
  styleUrl: './home-contact-us.component.scss',
})
export class HomeContactUsComponent {
  @Input() tag: string = '';
  @Input() title: string = '';
  @Input() formContent: any;

  model = new ContactFormClass('', '', '', '');

  public contactForm = new FormGroup({
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
    name: new FormControl<string | null>('', [Validators.required]),
    message: new FormControl<string | null>('', [Validators.required]),
  });

  onSubmit(): void {
    console.log('Form submitted');
  }
}
