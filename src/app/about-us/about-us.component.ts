import { Component, OnInit } from '@angular/core';
import WixImageClass from '../models/content/wix-image';
import { AboutUsService } from '../_app-services/about-us/about-us.service';
import AboutUsCoreClass from '../models/about_us/about_us_core';
import AboutUsCompanyValuesClass from '../models/about_us/about_us_company_values';
import AboutUsTeamClass from '../models/about_us/about_us_team';
import AboutUsWhyUsClass from '../models/about_us/about_us_why_us';
import HeadingClass from '../models/shared/heading';

@Component({
  selector: 'comp-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  headingContent: HeadingClass | null = null;
  headingBackgroundImage: WixImageClass | null = null;
  missionContent: AboutUsCoreClass | null = null;
  missionBackgroundImage: WixImageClass | null = null;
  visionContent: AboutUsCoreClass | null = null;
  visionBackgroundImage: WixImageClass | null = null;
  companyValuesContent: AboutUsCompanyValuesClass | null = null;
  companyValuesSideImage: WixImageClass | null = null;
  teamContent: AboutUsTeamClass | null = null;
  teamBackgroundImage: WixImageClass | null = null;
  whyUsContent: AboutUsWhyUsClass | null = null;

  constructor(private aboutUsService: AboutUsService) {}

  async ngOnInit(): Promise<void> {
    try {
      Promise.all([
        this.loadHeadingContent(),
        this.loadCoreContent(),
        this.loadCompanyValuesContent(),
        this.loadTeamContent(),
        this.loadWhyUsContent(),
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

  async loadTeamContent() {
    try {
      [this.teamContent, this.teamBackgroundImage] = await Promise.all([
        this.aboutUsService.getAboutUsTeamContent(),
        this.aboutUsService.getAboutUsTeamBackgroundImage(),
      ]);
    } catch (error) {
      throw error;
    }
  }

  async loadWhyUsContent() {
    try {
      this.whyUsContent = await this.aboutUsService.getAboutUsWhyUsContent();
    } catch (error) {
      throw error;
    }
  }
}
