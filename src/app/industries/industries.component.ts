import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../_app-services/industry/industry.service';
import IndustriesTeamClass from '../models/industries/industries_team';
import WixImageClass from '../models/content/wix-image';
import HeadingClass from '../models/shared/heading';

@Component({
  selector: 'comp-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent implements OnInit {
  industriesHeading: HeadingClass | null = null;
  industriesTeamContent: IndustriesTeamClass | null = null;
  industriesTeamBackground: WixImageClass | null = null;

  constructor(protected readonly industryService: IndustryService) {}

  async ngOnInit(): Promise<void> {
    try {
      await Promise.all([
        this.loadIndustriesHeading(),
        this.loadIndustriesTeamContent(),
        this.loadIndustriesTeamBackground(),
        this.loadIndustriesContent(),
      ]);
    } catch (error) {
      console.error('Error fetching industries heading:', error);
    }
  }

  async loadIndustriesHeading() {
    this.industriesHeading = await this.industryService.getIndustriesHeading();
  }

  async loadIndustriesTeamContent() {
    try {
      this.industriesTeamContent =
        await this.industryService.getIndustriesTeamContent();
    } catch (error) {
      console.error('Error fetching industries team content:', error);
    }
  }

  async loadIndustriesTeamBackground() {
    try {
      this.industriesTeamBackground =
        await this.industryService.getIndustriesTeamBackground();
    } catch (error) {
      console.error('Error fetching industries team background:', error);
    }
  }

  async loadIndustriesContent() {
    try {
      await this.industryService.getIndustriesContent();
    } catch (error) {
      console.error('Error fetching industries content:', error);
    }
  }
}
