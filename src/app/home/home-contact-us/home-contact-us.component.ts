import { Component, Input } from '@angular/core';
import ContactFormClass from '../../models/contact_us/contact_us_form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ContactUsSimplifiedClass from '../../models/contact_us/contact_us_simplified';
import { EmailService } from '../../_app-services/email.service';

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

  constructor(private emailService: EmailService) {}

  public contactForm = new FormGroup({
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
    name: new FormControl<string | null>('', [Validators.required]),
    message: new FormControl<string | null>('', [Validators.required]),
  });

  onSubmit(): void {
    try {
      this.emailService.sendContactUsEmail(
        this.contactForm.value as ContactUsSimplifiedClass
      );
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      this.contactForm.reset();
      this.model = new ContactFormClass('', '', '', '');
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    }
  }
}
