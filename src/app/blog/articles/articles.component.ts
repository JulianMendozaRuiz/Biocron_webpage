import { Component, Input, OnInit } from '@angular/core';
import { WixService } from '../../_app-services/wix.service';
import ArticleClass from '../../models/article';

@Component({
  selector: 'comp-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit {
  @Input() loadMoreText: string = '';
  loading: boolean = false;

  articles: ArticleClass[] = [];
  featuredArticle: ArticleClass | null = null;

  articlesPerPage = 3;
  currentPage = 1;

  constructor(private wixService: WixService) {}

  async ngOnInit() {
    try {
      this.featuredArticle = await this.wixService.getFeaturedArticleForBoard();

      this.articles = await this.wixService.getNonFeaturedArticlesForBoard(
        this.articlesPerPage,
        this.currentPage
      );

      console.log('Featured Article:', this.featuredArticle);
      console.log('Articles:', this.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }

  async loadMore() {
    this.currentPage++;
    this.loading = true;
    try {
      const newArticles = await this.wixService.getNonFeaturedArticlesForBoard(
        this.articlesPerPage,
        this.currentPage
      );
      this.articles = [...this.articles, ...newArticles];
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      this.loading = false;
    }
  }
}
