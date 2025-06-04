import { Component, OnInit } from '@angular/core';
import HeadingClass from '../models/shared/heading';
import { ContactUsService } from '../_app-services/contact_us/contact-us.service';
import ContactUsFormContentClass from '../models/contact_us/contact_us_form_content';
import WixImageClass from '../models/content/wix-image';

@Component({
  selector: 'comp-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  headingContent: HeadingClass | null = null;
  formContent: ContactUsFormContentClass | null = null;
  formSideImage: WixImageClass | null = null;

  constructor(private contactUsService: ContactUsService) {}

  async ngOnInit(): Promise<void> {
    try {
      Promise.all([
        this.loadContactUsHeading(),
        this.loadContactUsFormContent(),
        this.loadContactUsFormSideImage(),
      ]);
    } catch (error) {
      console.error('Error fetching contact us heading:', error);
    }
  }

  async loadContactUsHeading(): Promise<void> {
    try {
      this.headingContent = await this.contactUsService.getContactUsHeading();
    } catch (error) {
      console.error('Error loading contact us heading:', error);
    }
  }

  async loadContactUsFormContent(): Promise<void> {
    try {
      this.formContent = await this.contactUsService.getContactUsFormContent();
    } catch (error) {
      console.error('Error loading contact us form content:', error);
    }
  }

  async loadContactUsFormSideImage(): Promise<void> {
    try {
      this.formSideImage =
        await this.contactUsService.getContactUsFormSideImage();
    } catch (error) {
      console.error('Error loading contact us form side image:', error);
    }
  }
}
