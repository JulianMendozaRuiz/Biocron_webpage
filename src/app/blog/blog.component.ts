import { Component, OnInit } from '@angular/core';
import HeadingClass from '../models/shared/heading';
import { BlogService } from '../_app-services/blog/blog.service';
import articlesContentClass from '../models/blog/articles_content';

@Component({
  selector: 'comp-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  headingContent: HeadingClass | null = null;
  articlesContent: articlesContentClass | null = null;

  constructor(private blogService: BlogService) {}

  async ngOnInit(): Promise<void> {
    try {
      Promise.all([this.loadBlogHeadingContent(), this.loadArticlesContent()]);
    } catch (error) {
      console.error('Error during initialization of blog component:', error);
    }
  }

  async loadBlogHeadingContent(): Promise<void> {
    try {
      this.headingContent = await this.blogService.getBlogHeadingContent();
    } catch (error) {
      console.error('Error loading blog heading content:', error);
    }
  }

  async loadArticlesContent(): Promise<void> {
    try {
      this.articlesContent = await this.blogService.getArticlesContent();
    } catch (error) {
      console.error('Error loading articles content:', error);
    }
  }
}
