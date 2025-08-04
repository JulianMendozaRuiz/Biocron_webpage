import { Injectable } from '@angular/core';
import { WixService } from '../wix/wix.service';
import ArticleClass from '../../models/blog/article';
import ArticleCardClass from '../../models/blog/articleCard';
import HeadingClass from '../../models/shared/heading';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/type_enum';
import articlesContentClass from '../../models/blog/articles_content';
import ArticleLabels from '../../models/blog/article_labels';
import ArticleSimpleInterface from '../../models/blog/article_simple.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private wixService: WixService) {}

  async getBlogHeadingContent(): Promise<HeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.BLOG)
        .eq('sub_module', 'heading')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('Blog heading content not found');
      }

      const { name, title, description } = response.items[0]['content'][0];

      return new HeadingClass(response.items[0]._id, name, title, description);
    } catch (error) {
      console.error('Error fetching blog heading content:', error);
      throw error;
    }
  }

  async getArticlesContent(): Promise<articlesContentClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.BLOG)
        .eq('sub_module', 'articles')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('Articles content not found');
      }

      const { load_more_button } = response.items[0]['content'][0];

      return new articlesContentClass(response.items[0]._id, load_more_button);
    } catch (error) {
      console.error('Error fetching articles content:', error);
      throw error;
    }
  }

  async getArticle(pId: string): Promise<ArticleClass | null> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('ColombiaEnergyBlog')
        .eq('_id', pId)
        .eq('visible', true)
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
        isFeatured,
      );
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  }

  async getArticleLabels(): Promise<ArticleLabels> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.BLOG)
        .eq('sub_module', 'article')
        .eq('section', 'labels')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('Article labels not found');
      }

      const { author, read_more, link_label, other_articles } =
        response.items[0]['content'][0];

      return new ArticleLabels(
        response.items[0]._id,
        author,
        read_more,
        link_label,
        other_articles,
      );
    } catch (error) {
      console.error('Error fetching article labels:', error);
      throw error;
    }
  }

  async getOtherArticles(
    pId: string,
    pQuantity: number,
  ): Promise<ArticleCardClass[]> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('ColombiaEnergyBlog')
        .limit(pQuantity)
        .ne('_id', pId)
        .eq('visible', true)
        .fields('tag', 'title', 'publishDate', 'mainImage')
        .find();

      return (response.items as ArticleSimpleInterface[]).map(
        (item: ArticleSimpleInterface) => {
          const {
            _id: id,
            tag,
            title,
            mainImage,
            publishDate: datePublished,
          } = item;

          return new ArticleCardClass(id, tag, title, mainImage, datePublished);
        },
      );
    } catch (error) {
      console.error('Error fetching non-featured articles:', error);
      throw error;
    }
  }

  async getFeaturedArticleForBoard(): Promise<ArticleClass | null> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('ColombiaEnergyBlog')
        .limit(1)
        .eq('featured', true)
        .eq('visible', true)
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
    page: number,
  ): Promise<ArticleCardClass[]> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      if (!articlesPerPage || !page) {
        throw new Error('articlesPerPage and page must be provided');
      }

      if (articlesPerPage <= 0 || page <= 0) {
        throw new Error('articlesPerPage and page must be greater than 0');
      }

      const response = await this.wixService
        .wixClient!.items.query('ColombiaEnergyBlog')
        .skip((page - 1) * articlesPerPage)
        .limit(articlesPerPage)
        .eq('featured', false)
        .eq('visible', true)
        .fields('tag', 'title', 'publishDate', 'mainImage')
        .find();

      return (response.items as ArticleSimpleInterface[]).map(
        (item: ArticleSimpleInterface) => {
          const {
            _id: id,
            tag,
            title,
            mainImage,
            publishDate: datePublished,
          } = item;

          return new ArticleCardClass(id, tag, title, mainImage, datePublished);
        },
      );
    } catch (error) {
      console.error('Error fetching non-featured articles:', error);
      throw error;
    }
  }

  async getNonFeaturedArticlesCount(): Promise<number> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('ColombiaEnergyBlog')
        .eq('featured', false)
        .eq('visible', true)
        .count();

      console.log('Total non-featured articles:', response);

      return response;
    } catch (error) {
      console.error('Error fetching non-featured articles count:', error);
      throw error;
    }
  }
}
