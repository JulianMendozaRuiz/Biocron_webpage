import { Component, OnInit } from '@angular/core';
// TODO: Remove content and centralize it in the service
import content from '../../assets/content/about_us_content.json';
import WixImageClass from '../models/content/wix-image';
import AboutUsHeadingClass from '../models/about_us/about_us_heading';
import { AboutUsService } from '../_app-services/about-us/about-us.service';
import AboutUsCoreClass from '../models/about_us/about_us_core';
import AboutUsCompanyValuesClass from '../models/about_us/about_us_company_values';

@Component({
  selector: 'comp-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  headingContent: AboutUsHeadingClass | null = null;
  headingBackgroundImage: WixImageClass | null = null;
  missionContent: AboutUsCoreClass | null = null;
  missionBackgroundImage: WixImageClass | null = null;
  visionContent: AboutUsCoreClass | null = null;
  visionBackgroundImage: WixImageClass | null = null;
  companyValuesContent: AboutUsCompanyValuesClass | null = null;
  companyValuesSideImage: WixImageClass | null = null;

  aboutUsContent: any;

  constructor(private aboutUsService: AboutUsService) {
    this.aboutUsContent = content.about_us;
  }

  async ngOnInit(): Promise<void> {
    try {
      Promise.all([
        this.loadHeadingContent(),
        this.loadCoreContent(),
        this.loadCompanyValuesContent(),
      ]);
    } catch (error) {
      console.error('Error fetching about us content:', error);
    }
  }

  async loadHeadingContent() {
    try {
      [this.headingContent, this.headingBackgroundImage] = await Promise.all([
        this.aboutUsService.getAboutUsHeadingContent(),
        this.aboutUsService.getAboutUsHeadingBackgroundImage(),
      ]);
    } catch (error) {
      throw error;
    }
  }

  async loadCoreContent() {
    try {
      [
        this.missionContent,
        this.visionContent,
        this.missionBackgroundImage,
        this.visionBackgroundImage,
      ] = await Promise.all([
        this.aboutUsService.getAboutUsMissionContent(),
        this.aboutUsService.getAboutUsVisionContent(),
        this.aboutUsService.getAboutUsMissionBackgroundImage(),
        this.aboutUsService.getAboutUsVisionBackgroundImage(),
      ]);
    } catch (error) {
      throw error;
    }
  }

  async loadCompanyValuesContent() {
    try {
      [this.companyValuesContent, this.companyValuesSideImage] =
        await Promise.all([
          this.aboutUsService.getAboutUsCompanyValuesContent(),
          this.aboutUsService.getAboutUsCompanyValuesSideImage(),
        ]);
    } catch (error) {
      throw error;
    }
  }
}
