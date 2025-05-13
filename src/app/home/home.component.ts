import { Component, OnInit } from '@angular/core';
// TODO: remove this and centralize to separate service
import homeContent from '../../assets/content/home_content.json';
import servicesContent from '../../assets/content/services_content.json';
import { WixService } from '../_app-services/wix.service';
import GalleryClass from '../models/content/gallery';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heroContent: any;
  heroImages!: GalleryClass;
  aboutUsContent: any;
  servicesContent: any;
  clientsContent: any;
  contactUsContent: any;

  constructor(private wixService: WixService) {
    this.aboutUsContent = homeContent.about_us;
    this.servicesContent = servicesContent.services;
    this.clientsContent = homeContent.clients;
    this.contactUsContent = homeContent.contact_us;
  }

  async ngOnInit(): Promise<void> {
    try {
      this.heroContent = await this.wixService.getHomeHeroContent();
      const heroImagesObj = await this.wixService.getHomeHeroMediaGallery();
      this.heroImages = heroImagesObj;
    } catch (error) {
      console.error('Error fetching home content:', error);
    }
  }
}
