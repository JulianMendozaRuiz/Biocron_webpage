import { Component, OnInit } from '@angular/core';
import { WixService } from '../_app-services/wix.service';
import content from '../../assets/content/blog_content.json';

@Component({
  selector: 'comp-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  headingContent: any;
  articlesContent: any;

  constructor(private wixService: WixService) {
    this.headingContent = content.heading;
    this.articlesContent = content.articles;
  }

  async ngOnInit(): Promise<void> {}
}
