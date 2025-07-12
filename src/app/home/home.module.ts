import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './hero/hero.component';
import { HomeKeyServicesComponent } from './home-key-services/home-key-services.component';
import { ServicesModule } from '../services/services.module';
import { ClientsComponent } from './clients/clients.component';
import { HomeAboutUsComponent } from './home-about-us/home-about-us.component';
import { HomeContactUsComponent } from './home-contact-us/home-contact-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    HomeKeyServicesComponent,
    ClientsComponent,
    HomeAboutUsComponent,
    HomeContactUsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
    ServicesModule,
  ],
})
export class HomeModule {}
