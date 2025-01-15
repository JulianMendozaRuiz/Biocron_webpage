import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { KeyServicesComponent } from './key-services/key-services.component';
import { KeyServiceCardComponent } from './key-services/key-service-card/key-service-card.component';

@NgModule({
  declarations: [ServicesComponent, KeyServicesComponent, KeyServiceCardComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
