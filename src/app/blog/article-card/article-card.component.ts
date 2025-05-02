import { Component, Input } from '@angular/core';
import ArticleCardClass from '../../models/articleCard';

@Component({
  selector: 'comp-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input() article!: ArticleCardClass;
}
