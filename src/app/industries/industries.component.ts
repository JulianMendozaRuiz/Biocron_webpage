import { Component, OnInit } from '@angular/core';
import content from '../../assets/content/industries_content.json';
import IndustriesHeadingClass from '../models/industries/industries_heading';
import { IndustryService } from '../_app-services/industry/industry.service';

@Component({
  selector: 'comp-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent implements OnInit {
  industriesContent: any;
  industriesHeading: IndustriesHeadingClass | null = null;

  constructor(protected readonly industryService: IndustryService) {
    this.industriesContent = content;
  }

  async ngOnInit(): Promise<void> {
    try {
      await Promise.all([this.loadIndustriesHeading()]);
    } catch (error) {
      console.error('Error fetching industries heading:', error);
    }
  }

  async loadIndustriesHeading() {
    this.industriesHeading = await this.industryService.getIndustriesHeading();
  }
}
