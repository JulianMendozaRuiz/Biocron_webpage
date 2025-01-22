import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { EspecialHeadingComponent } from './especial-heading/especial-heading.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AboutUsComponent, EspecialHeadingComponent],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule, ButtonModule],
})
export class AboutUsModule {}
