import { Component, OnInit } from '@angular/core';
import homeContent from '../../assets/content/home_content.json';
import GalleryClass from '../models/content/gallery';
import WixImageClass from '../models/content/wix-image';
import { HomeService } from '../_app-services/home/home.service';
import HomeAboutUsClass from '../models/content/home/home_about_us';
import HomeHeroClass from '../models/content/home/home_hero';
import { ServiceService } from '../_app-services/service/service.service';
import ServiceClass from '../models/service';
import HomeHeadingClass from '../models/content/home/home_heading';
import HomeClientsClass from '../models/content/home/home_clients';

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
  contactUsContent: any;

  constructor(
    private homeService: HomeService,
    private serviceService: ServiceService
  ) {
    this.clientsContent = homeContent.clients;
    this.contactUsContent = homeContent.contact_us;
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.loadHeroFiles();
      await this.loadAboutUsFiles();
      await this.loadServicesFiles();
      await this.loadClientsFiles();
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
}
