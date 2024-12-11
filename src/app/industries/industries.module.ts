import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { KeyServicesComponent } from './key-services/key-services.component';
import { HeadingComponent } from './key-services/heading/heading.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndustriesComponent,
    KeyServicesComponent,
    HeadingComponent,
    TeamComponent,
  ],
  imports: [CommonModule, IndustriesRoutingModule, SharedModule],
})
export class IndustriesModule {}
