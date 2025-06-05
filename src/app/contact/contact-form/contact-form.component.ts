import { Component, Input } from '@angular/core';
import ContactFormClass from '../../models/contact_us/contact_us_form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ContactUsFormContentClass from '../../models/contact_us/contact_us_form_content';
import WixImageClass from '../../models/content/wix-image';
import { EmailService } from '../../_app-services/email.service';

@Component({
  selector: 'comp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  @Input() content: ContactUsFormContentClass | null = null;
  @Input() sideImage: WixImageClass | null = null;
  submitted: boolean = false;

  model = new ContactFormClass('name', 'email', 'phone', 'message');

  constructor(private emailService: EmailService) {}

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl<string | null>('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    try {
      this.emailService.sendContactUsEmail(
        this.contactForm.value as ContactFormClass
      );
      this.submitted = true;
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
