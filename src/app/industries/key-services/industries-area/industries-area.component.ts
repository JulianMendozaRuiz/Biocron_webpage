import { Component, OnInit } from '@angular/core';
import { IndustryService } from '../../../_app-services/industry/industry.service';
import IndustryClass from '../../../models/industries/industry';

@Component({
  selector: 'comp-industries-area',
  templateUrl: './industries-area.component.html',
  styleUrl: './industries-area.component.scss',
})
export class IndustriesAreaComponent implements OnInit {
  currentIndustry: IndustryClass | null = null;

  constructor(protected industryService: IndustryService) {
    this.industryService.currentIndustry.subscribe(
      (industry: IndustryClass | null) => {
        this.currentIndustry = industry;
      }
    );
  }

  ngOnInit(): void {
    this.industryService.currentIndustry.subscribe(
      (industry: IndustryClass | null) => {
        this.currentIndustry = industry;
      }
    );
  }

  setCurrentIndustry(pIndustry: IndustryClass): void {
    this.currentIndustry = null;
    this.industryService.setCurrentIndustry(pIndustry);
  }
}
