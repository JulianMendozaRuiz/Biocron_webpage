import { Injectable } from '@angular/core';
import { items } from '@wix/data';
import {
  createClient,
  OAuthStrategy,
  IOAuthStrategy,
  WixClient,
} from '@wix/sdk';
import { files } from '@wix/media';
import { environment } from '../../environments/environment';
import ArticleClass from '../models/article';
import ArticleCardClass from '../models/articleCard';
import HomeHeroClass from '../models/content/home/home_hero';
import ModulesEnum from '../models/content/modules_enum';
import typeEnum from '../models/content/home/type_enum';
import GalleryClass from '../models/content/gallery';
import { WixMediaService } from './wix-media.service';

@Injectable({
  providedIn: 'root',
})
export class WixService {
  public wixClient:
    | WixClient<
        undefined,
        IOAuthStrategy,
        { items: typeof items; files: typeof files }
      >
    | undefined;

  constructor(private wixMediaService: WixMediaService) {}

  async createClient() {
    this.wixClient = createClient({
      modules: { items, files },
      auth: OAuthStrategy({ clientId: environment.WIX_CLIENT_ID || '' }),
    });
  }

  async getHomeHeroContent(): Promise<HomeHeroClass> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient!.items.query('Site-static-content')
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
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient!.items.query('Site-static-content')
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

  async getArticle(pId: string): Promise<ArticleClass | null> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient!.items.query('ColombiaEnergyBlog')
        .eq('_id', pId)
        .find();

      if (response.items.length === 0) {
        throw new Error('Article not found');
      }

      const {
        _id: id,
        tag,
        title,
        mainImage,
        publishDate: datePublished,
        mainBody: content,
        author,
        originalPostLink,
        featured: isFeatured,
      } = response.items[0];

      return new ArticleClass(
        id,
        tag,
        title,
        mainImage,
        datePublished,
        content,
        author,
        originalPostLink,
        isFeatured
      );
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  }

  async getOtherArticles(
    pId: string,
    pQuantity: number
  ): Promise<ArticleCardClass[]> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient!.items.query('ColombiaEnergyBlog')
        .limit(pQuantity)
        .ne('_id', pId)
        .fields('tag', 'title', 'publishDate', 'mainImage')
        .find();

      return response.items.map((item: any) => {
        const {
          _id: id,
          tag,
          title,
          mainImage,
          publishDate: datePublished,
        } = item;

        return new ArticleCardClass(id, tag, title, mainImage, datePublished);
      });
    } catch (error) {
      console.error('Error fetching non-featured articles:', error);
      throw error;
    }
  }

  async getFeaturedArticleForBoard(): Promise<ArticleClass | null> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient!.items.query('ColombiaEnergyBlog')
        .limit(1)
        .eq('featured', true)
        .fields('tag', 'title', 'publishDate', 'mainImage')
        .find();

      if (response.items.length === 0) {
        throw new Error('No featured article found');
      }

      const {
        _id: id,
        tag,
        title,
        mainImage,
        publishDate: datePublished,
      } = response.items[0];

      return new ArticleCardClass(id, tag, title, mainImage, datePublished);
    } catch (error) {
      console.error('Error fetching featured article:', error);
      throw error;
    }
  }

  async getNonFeaturedArticlesForBoard(
    articlesPerPage: number,
    page: number
  ): Promise<ArticleCardClass[]> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      if (!articlesPerPage || !page) {
        throw new Error('articlesPerPage and page must be provided');
      }

      if (articlesPerPage <= 0 || page <= 0) {
        throw new Error('articlesPerPage and page must be greater than 0');
      }

      const response = await this.wixClient!.items.query('ColombiaEnergyBlog')
        .skip((page - 1) * articlesPerPage)
        .limit(articlesPerPage)
        .eq('featured', false)
        .fields('tag', 'title', 'publishDate', 'mainImage')
        .find();

      return response.items.map((item: any) => {
        const {
          _id: id,
          tag,
          title,
          mainImage,
          publishDate: datePublished,
        } = item;

        return new ArticleCardClass(id, tag, title, mainImage, datePublished);
      });
    } catch (error) {
      console.error('Error fetching non-featured articles:', error);
      throw error;
    }
  }
}
