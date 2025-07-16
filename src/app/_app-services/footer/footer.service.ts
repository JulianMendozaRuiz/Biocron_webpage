import { Injectable } from '@angular/core';
import { WixService } from '../wix/wix.service';
import FooterClass from '../../models/footer/footer';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/type_enum';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private wixService: WixService) {}

  async getFooterContent(): Promise<FooterClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.FOOTER)
        .eq('sub_module', 'footer')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No footer content found');
      }

      const {
        description,
        copyright,
        documents,
        routes,
        socials_title: socialsTitle,
        socials,
      } = response.items[0]['content'][0];

      return new FooterClass(
        response.items[0]._id,
        description,
        copyright,
        documents,
        routes,
        socialsTitle,
        socials,
      );
    } catch (error) {
      console.error('Error fetching footer content:', error);
      throw error;
    }
  }
}
