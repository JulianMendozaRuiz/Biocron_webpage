import { Component, OnInit } from '@angular/core';
import homeContent from '../../assets/content/home_content.json';
import servicesContent from '../../assets/content/services_content.json';
import GalleryClass from '../models/content/gallery';
import WixImageClass from '../models/content/wix-image';
import { HomeService } from '../_app-services/home/home.service';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heroContent: any;
  heroImages!: GalleryClass;
  aboutUsContent: any;
  aboutUsBackgroundImage: WixImageClass | null = null;
  servicesContent: any;
  clientsContent: any;
  contactUsContent: any;

  constructor(private homeService: HomeService) {
    this.aboutUsContent = homeContent.about_us;
    this.servicesContent = servicesContent.services;
    this.clientsContent = homeContent.clients;
    this.contactUsContent = homeContent.contact_us;
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loadHeroFiles();
    } catch (error) {
      console.error('Error fetching home content:', error);
    }
  }

  async loadHeroFiles() {
    this.heroContent = await this.homeService.getHomeHeroContent();
    const heroImagesObj = await this.homeService.getHomeHeroMediaGallery();
    this.heroImages = heroImagesObj;
  }

  async loadAboutUsFiles() {
    this.aboutUsContent = await this.homeService.getHomeAboutUsContent();
  }
}
