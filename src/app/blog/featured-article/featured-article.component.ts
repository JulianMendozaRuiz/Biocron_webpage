import { Component, Input } from '@angular/core';
import ArticleCardClass from '../../models/articleCard';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'comp-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.scss',
})
export class FeaturedArticleComponent {
  @Input() article!: ArticleCardClass;

  constructor(private router: Router, private route: ActivatedRoute) {}

  async goToArticle() {
    await this.router.navigate([`article`, this.article.id], {
      relativeTo: this.route,
    });
  }
}
