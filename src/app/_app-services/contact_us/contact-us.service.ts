import { Injectable } from '@angular/core';
import { WixService } from '../wix/wix.service';
import SharedContactUsClass from '../../shared/shared_models/shared_contact_us';
import ModulesEnum from '../../models/content/modules_enum';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  contactUsContent: SharedContactUsClass | null = null;

  constructor(private wixService: WixService) {}

  async getContactUsContent(): Promise<SharedContactUsClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.CONTACT)
        .eq('sub_module', 'content')
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
}
