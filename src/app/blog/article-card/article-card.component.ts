import { Component, Input } from '@angular/core';
import ArticleCardClass from '../../models/articleCard';
import { Router } from '@angular/router';

@Component({
  selector: 'comp-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input() article!: ArticleCardClass;

  constructor(private router: Router) {}

  async goToArticle() {
    await this.router.navigate(['blog', `article`, this.article.id], {
      onSameUrlNavigation: 'reload',
      replaceUrl: true,
      skipLocationChange: false,
    });
  }
}
