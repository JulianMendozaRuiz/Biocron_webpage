import { Injectable } from '@angular/core';
import { WixService } from '../wix/wix.service';
import HeaderClass from '../../models/header/header';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/type_enum';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private wixService: WixService) {}

  async getHeaderTags(): Promise<HeaderClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HEADER)
        .eq('sub_module', 'header')
        .eq('section', 'tags')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No header content found');
      }

      const {
        about_us_tag: aboutUsTag,
        industries_tag: industriesTag,
        blog_tag: blogTag,
        contact_us_tag: contactUsTag,
        services_tag: servicesTag,
      } = response.items[0]['content'][0];

      return new HeaderClass(
        response.items[0]._id,
        aboutUsTag,
        industriesTag,
        blogTag,
        contactUsTag,
        servicesTag,
      );
    } catch (error) {
      console.error('Error fetching header tags:', error);
      throw error;
    }
  }
}
