import { Injectable } from '@angular/core';
import { WixService } from '../wix/wix.service';
import SharedContactUsClass from '../../shared/shared_models/shared_contact_us';
import ModulesEnum from '../../models/content/modules_enum';
import HeadingClass from '../../models/shared/heading';
import ContactUsFormContentClass from '../../models/contact_us/contact_us_form_content';
import WixImageClass from '../../models/content/wix-image';
import { WixMediaService } from '../wix/wix-media.service';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  contactUsContent: SharedContactUsClass | null = null;

  constructor(
    private wixService: WixService,
    private wixMediaService: WixMediaService
  ) {}

  async getContactUsHeading(): Promise<HeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.CONTACT)
        .eq('sub_module', 'heading')
        .eq('section', 'content')
        .eq('type', 'json')
        .find();

      if (response.items.length === 0) {
        throw new Error('No contact us heading found');
      }

      const { name, title, description } = response.items[0]['content'][0];
      return new HeadingClass(response.items[0]._id, name, title, description);
    } catch (error) {
      console.error('Error fetching contact us heading:', error);
      throw error;
    }
  }

  async getContactUsCardContent(): Promise<SharedContactUsClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.CONTACT)
        .eq('sub_module', 'card')
        .eq('section', 'content')
        .eq('type', 'json')
        .find();

      if (response.items.length === 0) {
        throw new Error('No contact us content found');
      }

      const content = response.items[0]['content'][0];
      this.contactUsContent = new SharedContactUsClass(
        content.title,
        content.description,
        content.contact_button_text,
        content.phone_number_title,
        content.phone_number,
        content.email_title,
        content.email_address,
        content.opening_hours_title,
        content.opening_hours
      );

      return this.contactUsContent;
    } catch (error) {
      console.error('Error fetching contact us content:', error);
      throw error;
    }
  }

  async getContactUsFormContent(): Promise<ContactUsFormContentClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.CONTACT)
        .eq('sub_module', 'form')
        .eq('section', 'content')
        .eq('type', 'json')
        .find();

      if (response.items.length === 0) {
        throw new Error('No contact us form content found');
      }

      const {
        title,
        description,
        quote,
        quote_author,
        contact_name,
        email,
        phone,
        message,
        button_text,
      } = response.items[0]['content'][0];
      return new ContactUsFormContentClass(
        response.items[0]._id,
        title,
        description,
        quote,
        quote_author,
        contact_name,
        email,
        phone,
        message,
        button_text
      );
    } catch (error) {
      console.error('Error fetching contact us form content:', error);
      throw error;
    }
  }

  async getContactUsFormSideImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.CONTACT)
        .eq('sub_module', 'form')
        .eq('section', 'side_image')
        .eq('type', 'image')
        .find();

      if (response.items.length === 0) {
        throw new Error('No contact us form side image found');
      }
      const { single_image } = response.items[0];

      return this.wixMediaService.createImageFromUrl(single_image);
    } catch (error) {
      console.error('Error fetching contact us form side image:', error);
      throw error;
    }
  }
}
