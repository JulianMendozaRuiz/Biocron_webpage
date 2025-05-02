import { Component, Input } from '@angular/core';
import ArticleCardClass from '../../models/articleCard';

@Component({
  selector: 'comp-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.scss',
})
export class FeaturedArticleComponent {
  @Input() article!: ArticleCardClass;
}
