import { Injectable } from '@angular/core';
import { items } from '@wix/data';
import { createClient, OAuthStrategy, WixClient } from '@wix/sdk';
import { environment } from '../../environments/environment';
import ArticleClass from '../models/article';
import ArticleCardClass from '../models/articleCard';

@Injectable({
  providedIn: 'root',
})
export class WixService {
  public wixClient: any;

  async createClient() {
    this.wixClient = createClient({
      modules: { items },
      auth: OAuthStrategy({ clientId: environment.WIX_CLIENT_ID || '' }),
    });
  }

  async getArticle(pId: string): Promise<ArticleClass | null> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient.items
        .query('ColombiaEnergyBlog')
        .eq('_id', pId)
        .find();

      if (response.items.length === 0) {
        throw new Error('Article not found');
      }

      console.log('Response from Wix:', response);

      const {
        _id: id,
        tag,
        title,
        mainImage,
        publishDate: datePublished,
        content,
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

  async getFeaturedArticleForBoard(): Promise<ArticleClass | null> {
    try {
      if (!this.wixClient) {
        await this.createClient();
      }

      const response = await this.wixClient.items
        .query('ColombiaEnergyBlog')
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

  async getNonFeaturedArticlesForBoard(articlesPerPage: number, page: number) {
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

      const response = await this.wixClient.items
        .query('ColombiaEnergyBlog')
        .skip((page - 1) * articlesPerPage)
        .limit(articlesPerPage)
        .eq('featured', false)
        .fields('tag', 'title', 'publishDate', 'mainImage')
        .find();

      console.log('Response from Wix non-featured:', response);
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
