import { Component, Input } from '@angular/core';
import ArticleCardClass from '../../models/articleCard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'comp-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input() article!: ArticleCardClass;

  constructor(private router: Router, private route: ActivatedRoute) {}

  async goToArticle() {
    await this.router.navigate([`article`, this.article.id], {
      relativeTo: this.route,
    });
  }
}
