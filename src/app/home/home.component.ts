import { Component, OnInit } from '@angular/core';
import homeContent from '../../assets/content/home_content.json';
import servicesContent from '../../assets/content/services_content.json';
import GalleryClass from '../models/content/gallery';
import WixImageClass from '../models/content/wix-image';
import { HomeService } from '../_app-services/home/home.service';
import HomeAboutUsClass from '../models/content/home/home_about_us';
import HomeHeroClass from '../models/content/home/home_hero';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heroContent: HomeHeroClass | null = null;
  heroImages!: GalleryClass;
  aboutUsContent: HomeAboutUsClass | null = null;
  aboutUsBackgroundImage: WixImageClass | null = null;
  aboutUsBackgroundParticles: WixImageClass | null = null;
  servicesContent: any;
  clientsContent: any;
  contactUsContent: any;

  constructor(private homeService: HomeService) {
    // this.aboutUsContent = homeContent.about_us;
    this.servicesContent = servicesContent.services;
    this.clientsContent = homeContent.clients;
    this.contactUsContent = homeContent.contact_us;
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.loadHeroFiles();
      await this.loadAboutUsFiles();
    } catch (error) {
      console.error('Error fetching home content:', error);
    }
  }

  async loadHeroFiles() {
    this.heroContent = await this.homeService.getHomeHeroContent();
    this.heroImages = await this.homeService.getHomeHeroMediaGallery();
  }

  async loadAboutUsFiles() {
    this.aboutUsContent = await this.homeService.getHomeAboutUsContent();
    const aboutUsImages = await this.homeService.getHomeAboutUsImages();

    this.aboutUsBackgroundParticles = aboutUsImages.images[0];
    this.aboutUsBackgroundImage = aboutUsImages.images[1];
  }
}
