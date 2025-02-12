import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './hero/hero.component';
import { HomeKeyServicesComponent } from './home-key-services/home-key-services.component';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [HomeComponent, HeroComponent, HomeKeyServicesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ButtonModule,
    CarouselModule,
    ServicesModule,
  ],
})
export class HomeModule {}
