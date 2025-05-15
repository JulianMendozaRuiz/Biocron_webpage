import { Component, ElementRef, OnInit } from '@angular/core';
import ArticleClass from '../../models/article';
import { ActivatedRoute } from '@angular/router';
import content from '../../../assets/content/blog_content.json';
import ArticleCardClass from '../../models/articleCard';
import { BlogService } from '../../_app-services/blog/blog.service';

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
  articleContentLabels: any;

  constructor(
    private blogService: BlogService,
    private readonly route: ActivatedRoute,
    protected readonly elementRef: ElementRef
  ) {
    this.articleContentLabels = content.article;
  }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(async (params) => {
      console.log('params', params);

      this.articleId = params.get('id');
      this.article = null;
      await this.loadArticle(this.articleId!);
    });
  }

  async loadArticle(id: string) {
    this.article = await this.blogService.getArticle(id);
    this.otherArticles = await this.blogService.getOtherArticles(
      this.articleId!,
      this.otherArticlesQuantity
    );
    console.log('article', this.article);
  }
}
