import { Component } from '@angular/core';
import content from '../../assets/content/blog_content.json';

@Component({
  selector: 'comp-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  headingContent: any;
  articlesContent: any;

  constructor() {
    this.headingContent = content.heading;
    this.articlesContent = content.articles;
  }
}
