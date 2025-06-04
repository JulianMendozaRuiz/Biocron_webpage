import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import ContactUsSimplifiedClass from '../models/contact_us/contact_us_simplified';
import ContactUsCompleteClass from '../models/contact_us/contact_us_complete_form';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId: string = '';
  private templateId: string = '';
  private publicKey: string = '';

  constructor(private datePipe: DatePipe) {
    this.serviceId = environment.EMAILJS_SERVICE_ID;
    this.templateId = environment.EMAILJS_TEMPLATE_ID;
    this.publicKey = environment.EMAILJS_PUBLIC_KEY;
  }

  public async sendContactUsEmail(
    pForm: ContactUsSimplifiedClass | ContactUsCompleteClass
  ): Promise<void> {
    try {
      await emailjs.send(
        this.serviceId,
        this.templateId,
        { ...pForm, date: this.datePipe.transform(new Date(), 'MMMM d, y') },
        this.publicKey
      );
    } catch (error) {
      console.error(
        'Error sending email:',
        (error as EmailJSResponseStatus).text
      );
    }
  }
}
