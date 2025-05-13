import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'article/:id',
    component: ArticleViewComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
