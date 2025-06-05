import { Component, OnInit } from '@angular/core';
import GalleryClass from '../models/content/gallery';
import WixImageClass from '../models/content/wix-image';
import { HomeService } from '../_app-services/home/home.service';
import HomeAboutUsClass from '../models/content/home/home_about_us';
import HomeHeroClass from '../models/content/home/home_hero';
import { ServiceService } from '../_app-services/service/service.service';
import ServiceClass from '../models/service';
import HomeHeadingClass from '../models/content/home/home_heading';
import HomeClientsClass from '../models/content/home/home_clients';
import HomeContactUsClass from '../models/content/home/home_contact_us';

@Component({
  selector: 'comp-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  heroContent: HomeHeroClass | null = null;
  heroImages: GalleryClass | null = null;
  aboutUsContent: HomeAboutUsClass | null = null;
  aboutUsBackgroundImage: WixImageClass | null = null;
  aboutUsBackgroundParticles: WixImageClass | null = null;
  servicesHead: HomeHeadingClass | null = null;
  servicesContent: ServiceClass[] | null = null;
  clientsSideImage: WixImageClass | null = null;
  clientsContent: HomeClientsClass | null = null;
  clientsLogos: GalleryClass | null = null;
  contactUsContent: HomeContactUsClass | null = null;

  constructor(
    private homeService: HomeService,
    private serviceService: ServiceService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await Promise.all([
        this.loadHeroFiles(),
        this.loadAboutUsFiles(),
        this.loadServicesFiles(),
        this.loadClientsFiles(),
        this.loadContactUsFiles(),
      ]);
    } catch (error) {
      console.error('Error fetching home content:', error);
    }
  }

  async loadHeroFiles() {
    try {
      this.heroContent = await this.homeService.getHomeHeroContent();
      this.heroImages = await this.homeService.getHomeHeroMediaGallery();
    } catch (error) {
      throw error;
    }
  }

  async loadAboutUsFiles() {
    try {
      this.aboutUsContent = await this.homeService.getHomeAboutUsContent();
      const aboutUsImages = await this.homeService.getHomeAboutUsImages();

      this.aboutUsBackgroundParticles = aboutUsImages.images[0];
      this.aboutUsBackgroundImage = aboutUsImages.images[1];
    } catch (error) {
      throw error;
    }
  }

  async loadServicesFiles() {
    try {
      this.servicesHead = await this.homeService.getHomeServicesHead();
      this.servicesContent = await this.serviceService.getServices();
    } catch (error) {
      throw error;
    }
  }

  async loadClientsFiles() {
    try {
      this.clientsContent = await this.homeService.getHomeClientsContent();
      this.clientsLogos = await this.homeService.getHomeClientsLogos();
      this.clientsSideImage = await this.homeService.getHomeClientsSideImage();
    } catch (error) {
      throw error;
    }
  }

  async loadContactUsFiles() {
    try {
      this.contactUsContent = await this.homeService.getHomeContactUsContent();
    } catch (error) {
      throw error;
    }
  }
}
