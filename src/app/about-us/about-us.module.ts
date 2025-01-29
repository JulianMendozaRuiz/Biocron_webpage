import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { EspecialHeadingComponent } from './especial-heading/especial-heading.component';
import { ButtonModule } from 'primeng/button';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
import { CompanyValuesComponent } from './company-values/company-values.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [AboutUsComponent, EspecialHeadingComponent, MisionVisionComponent, CompanyValuesComponent, TeamComponent],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule, ButtonModule],
})
export class AboutUsModule {}
