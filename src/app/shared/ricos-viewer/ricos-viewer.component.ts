import { Component, Input } from '@angular/core';
import ArticleClass from '../../models/blog/article';

@Component({
  selector: 'comp-ricos-viewer',
  templateUrl: './ricos-viewer.component.html',
  styleUrl: './ricos-viewer.component.scss',
})
export class RicosViewerComponent {
  @Input() article: ArticleClass | null = null;
}
