import { Injectable } from '@angular/core';
import HomeHeroClass from '../../models/content/home/home_hero';
import ModulesEnum from '../../models/content/modules_enum';
import GalleryClass from '../../models/content/gallery';
import typeEnum from '../../models/content/home/type_enum';
import HomeAboutUsClass from '../../models/content/home/home_about_us';
import HomeHeadingClass from '../../models/content/home/home_heading';
import { WixService } from '../wix/wix.service';
import { WixMediaService } from '../wix/wix-media.service';
import HomeClientsClass from '../../models/content/home/home_clients';
import WixImageClass from '../../models/content/wix-image';
import HomeContactUsClass from '../../models/content/home/home_contact_us';

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

  async getHomeAboutUsContent(): Promise<HomeAboutUsClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'about_us')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { tag, description, background_image, background_particles } =
        response.items[0]['content'][0];

      return new HomeAboutUsClass(
        response.items[0]._id,
        tag,
        description,
        background_image,
        background_particles
      );
    } catch (error) {
      console.error('Error fetching home about us content:', error);
      throw error;
    }
  }

  async getHomeAboutUsImages(): Promise<GalleryClass> {
    try {
      if (!this.wixService.wixClient) {
        throw new Error('Wix client not initialized');
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'about_us')
        .eq('type', typeEnum.MEDIA_GALLERY)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { _id: id, media_gallery: images } = response.items[0];

      return new GalleryClass(
        id,
        this.wixMediaService.createMediaGallery(images)
      );
    } catch (error) {
      console.error(
        'Error fetching home about us images media gallery:',
        error
      );
      throw error;
    }
  }

  async getHomeServicesHead(): Promise<HomeHeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'services')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { view_name, view_title } = response.items[0]['content'][0];

      return new HomeHeadingClass(view_name, view_title);
    } catch (error) {
      console.error('Error fetching home services head:', error);
      throw error;
    }
  }

  async getHomeClientsContent(): Promise<HomeClientsClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'clients')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { tag, title, description, button_text } =
        response.items[0]['content'][0];

      return new HomeClientsClass(tag, title, description, button_text);
    } catch (error) {
      console.error('Error fetching home clients content:', error);
      throw error;
    }
  }

  async getHomeClientsLogos(): Promise<GalleryClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'clients')
        .eq('section', 'client_logos')
        .eq('type', typeEnum.MEDIA_GALLERY)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }
      const { _id: id, media_gallery: images } = response.items[0];

      return new GalleryClass(
        id,
        this.wixMediaService.createMediaGallery(images)
      );
    } catch (error) {
      console.error('Error fetching home clients logos:', error);
      throw error;
    }
  }

  async getHomeClientsSideImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'clients')
        .eq('section', 'side_image')
        .eq('type', typeEnum.IMAGE)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { single_image } = response.items[0];

      return this.wixMediaService.createImageFromUrl(single_image);
    } catch (error) {
      console.error('Error fetching home clients side image:', error);
      throw error;
    }
  }

  async getHomeContactUsContent(): Promise<any> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.HOME)
        .eq('sub_module', 'contact_us')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { tag, title, form_content } = response.items[0]['content'][0];

      return new HomeContactUsClass(
        response.items[0]._id,
        tag,
        title,
        form_content
      );
    } catch (error) {
      console.error('Error fetching contact us content:', error);
      throw error;
    }
  }
}
