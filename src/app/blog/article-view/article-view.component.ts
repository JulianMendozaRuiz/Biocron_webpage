import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WixService } from '../../_app-services/wix.service';
import ArticleClass from '../../models/article';
import { ActivatedRoute } from '@angular/router';
import content from '../../../assets/content/blog_content.json';

@Component({
  selector: 'comp-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.scss',
})
export class ArticleViewComponent implements OnInit {
  article: ArticleClass | null = null;
  articleId: string | null = null;
  articleContentLabels: any;

  constructor(
    private wixService: WixService,
    private readonly route: ActivatedRoute,
    protected readonly elementRef: ElementRef
  ) {
    this.articleContentLabels = content.article;
    this.articleId = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit(): Promise<void> {
    if (this.articleId) {
      this.article = await this.wixService.getArticle(this.articleId);
      console.log('article', this.article);
    }
  }
}
