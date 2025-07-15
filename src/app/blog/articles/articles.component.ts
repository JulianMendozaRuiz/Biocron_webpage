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
  totalNonFeaturedArticles = 0;

  constructor(private blogService: BlogService) {}

  async ngOnInit() {
    this.loading = true;
    try {
      this.totalNonFeaturedArticles =
        await this.blogService.getNonFeaturedArticlesCount();

      this.featuredArticle =
        await this.blogService.getFeaturedArticleForBoard();

      this.articles = await this.blogService.getNonFeaturedArticlesForBoard(
        this.articlesPerPage,
        this.currentPage,
      );
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      this.loading = false;
    }
  }

  async loadMore() {
    this.loading = true;
    this.currentPage++;
    try {
      const newArticles = await this.blogService.getNonFeaturedArticlesForBoard(
        this.articlesPerPage,
        this.currentPage,
      );
      this.articles = [...this.articles, ...newArticles];
    } catch (error) {
      console.error('Error loading more articles:', error);
    } finally {
      this.loading = false;
    }
  }

  get displayedAllArticles(): boolean {
    return this.articles.length >= this.totalNonFeaturedArticles;
  }
}
