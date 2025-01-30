import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { KeyServicesComponent } from './key-services/key-services.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';
import { IndustriesAreaComponent } from './key-services/industries-area/industries-area.component';

@NgModule({
  declarations: [
    IndustriesComponent,
    IndustriesAreaComponent,
    KeyServicesComponent,
    TeamComponent,
  ],
  imports: [CommonModule, IndustriesRoutingModule, SharedModule],
})
export class IndustriesModule {}
