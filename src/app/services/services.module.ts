import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { KeyServicesComponent } from './key-services/key-services.component';
import { KeyServiceCardComponent } from './key-services/key-service-card/key-service-card.component';
import { SimplifiedKeyServiceCardComponent } from './key-services/simplified-key-service-card/simplified-key-service-card.component';

@NgModule({
  declarations: [
    ServicesComponent,
    KeyServicesComponent,
    KeyServiceCardComponent,
    SimplifiedKeyServiceCardComponent,
  ],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
  exports: [SimplifiedKeyServiceCardComponent],
})
export class ServicesModule {}
