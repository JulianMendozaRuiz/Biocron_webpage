import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles/articles.component';
import { FeaturedArticleComponent } from './featured-article/featured-article.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleViewComponent } from './article-view/article-view.component';

@NgModule({
  declarations: [
    BlogComponent,
    ArticlesComponent,
    FeaturedArticleComponent,
    ArticleCardComponent,
    ArticleViewComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
