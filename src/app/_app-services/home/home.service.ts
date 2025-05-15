import { Injectable } from '@angular/core';
import { WixService } from '../wix.service';
import { WixMediaService } from '../wix-media.service';
import HomeHeroClass from '../../models/content/home/home_hero';
import ModulesEnum from '../../models/content/modules_enum';
import GalleryClass from '../../models/content/gallery';
import typeEnum from '../../models/content/home/type_enum';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private wixService: WixService,
    private wixMediaService: WixMediaService
  ) {}

  async getHomeHeroContent(): Promise<HomeHeroClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'hero')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { title, description, images } = response.items[0]['content'][0];

      return new HomeHeroClass(
        response.items[0]._id,
        title,
        description,
        images
      );
    } catch (error) {
      console.error('Error fetching home hero content:', error);
      throw error;
    }
  }

  async getHomeHeroMediaGallery(): Promise<GalleryClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'hero')
        .eq('type', typeEnum.MEDIA_GALLERY)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }
      const { _id: id, media_gallery: images } = response.items[0];

      const gallery = this.wixMediaService.createMediaGallery(images);

      return new GalleryClass(id, gallery);
    } catch (error) {
      console.error('Error fetching home hero media gallery:', error);
      throw error;
    }
  }

  getHomeAboutUsContent(): any {
    throw new Error('Method not implemented.');
  }
}
