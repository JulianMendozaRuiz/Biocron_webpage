import { Component, OnInit } from '@angular/core';
import GalleryClass from '../models/content/gallery';
import WixImageClass from '../models/content/wix-image';
import { HomeService } from '../_app-services/home/home.service';
import HomeAboutUsClass from '../models/home/home_about_us';
import HomeHeroClass from '../models/home/home_hero';
import HomeHeadingClass from '../models/home/home_heading';
import HomeClientsClass from '../models/home/home_clients';
import HomeContactUsClass from '../models/home/home_contact_us';

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
  clientsSideImage: WixImageClass | null = null;
  clientsContent: HomeClientsClass | null = null;
  clientsLogos: GalleryClass | null = null;
  contactUsContent: HomeContactUsClass | null = null;

  constructor(private homeService: HomeService) {}

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
    this.heroContent = await this.homeService.getHomeHeroContent();
    this.heroImages = await this.homeService.getHomeHeroMediaGallery();
  }

  async loadAboutUsFiles() {
    this.aboutUsContent = await this.homeService.getHomeAboutUsContent();
    const aboutUsImages = await this.homeService.getHomeAboutUsImages();

    this.aboutUsBackgroundParticles = aboutUsImages.images[0];
    this.aboutUsBackgroundImage = aboutUsImages.images[1];
  }

  async loadServicesFiles() {
    this.servicesHead = await this.homeService.getHomeServicesHead();
  }

  async loadClientsFiles() {
    this.clientsContent = await this.homeService.getHomeClientsContent();
    this.clientsLogos = await this.homeService.getHomeClientsLogos();
    this.clientsSideImage = await this.homeService.getHomeClientsSideImage();
  }

  async loadContactUsFiles() {
    this.contactUsContent = await this.homeService.getHomeContactUsContent();
  }
}
