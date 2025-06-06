import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../_app-services/blog/blog.service';
import ArticleClass from '../../models/blog/article';
import ArticleCardClass from '../../models/blog/articleCard';
import ArticleLabels from '../../models/blog/article_labels';

@Component({
  selector: 'comp-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent implements OnInit {
  article: ArticleClass | null = null;
  otherArticles: ArticleCardClass[] = [];
  otherArticlesQuantity: number = 3;
  articleId: string | null = null;
  articleContentLabels: ArticleLabels | null = null;

  constructor(
    private blogService: BlogService,
    private readonly route: ActivatedRoute,
    protected readonly elementRef: ElementRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async (params) => {
      this.articleId = params.get('id');
      this.article = null;
      Promise.all([
        this.loadArticle(this.articleId!),
        this.loadArticleLabels(),
      ]);
    });
  }

  async loadArticle(id: string) {
    this.article = await this.blogService.getArticle(id);
    this.otherArticles = await this.blogService.getOtherArticles(
      this.articleId!,
      this.otherArticlesQuantity
    );
  }

  async loadArticleLabels() {
    try {
      this.articleContentLabels = await this.blogService.getArticleLabels();
      console.log('articleContentLabels', this.articleContentLabels);
    } catch (error) {
      console.error('Error loading article labels:', error);
      this.articleContentLabels = null; // Set to null if there's an error
    }
  }
}
