import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../_app-services/blog/blog.service';
import ArticleClass from '../../models/blog/article';

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

  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    try {
      this.featuredArticle =
        await this.blogService.getFeaturedArticleForBoard();

      this.articles = await this.blogService.getNonFeaturedArticlesForBoard(
        this.articlesPerPage,
        this.currentPage
      );
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }

  async loadMore() {
    this.currentPage++;
    this.loading = true;
    try {
      const newArticles = await this.blogService.getNonFeaturedArticlesForBoard(
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
