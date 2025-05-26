import { Component, OnInit } from '@angular/core';
// TODO: Remove content and centralize it in the service
import content from '../../assets/content/about_us_content.json';
import WixImageClass from '../models/content/wix-image';
import AboutUsHeadingClass from '../models/about_us/about_us_heading';
import { AboutUsService } from '../_app-services/about-us/about-us.service';

@Component({
  selector: 'comp-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  headingContent: AboutUsHeadingClass | null = null;
  headingBackgroundImage: WixImageClass | null = null;
  aboutUsContent: any;

  constructor(private aboutUsService: AboutUsService) {
    this.aboutUsContent = content.about_us;
  }

  async ngOnInit(): Promise<void> {
    try {
      Promise.all([this.loadHeadingContent()]);
    } catch (error) {
      console.error('Error fetching about us content:', error);
    }
  }

  async loadHeadingContent() {
    try {
      this.headingContent =
        await this.aboutUsService.getAboutUsHeadingContent();

      this.headingBackgroundImage =
        await this.aboutUsService.getAboutUsHeadingBackgroundImage();
    } catch (error) {
      throw error;
    }
  }
}
