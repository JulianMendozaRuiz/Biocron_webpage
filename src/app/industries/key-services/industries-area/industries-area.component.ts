import { Component, Input, OnInit } from '@angular/core';
import { IndustryService } from '../../../_app-services/industry.service';
import IndustryClass from '../../../models/industry';

@Component({
  selector: 'comp-industries-area',
  templateUrl: './industries-area.component.html',
  styleUrl: './industries-area.component.scss',
})
export class IndustriesAreaComponent implements OnInit {
  @Input() industriesContent: any;

  currentIndustry: IndustryClass | null = null;

  constructor(protected industryService: IndustryService) {
    this.industryService.currentIndustry.subscribe(
      (industry: IndustryClass | null) => {
        this.currentIndustry = industry;
      }
    );
  }

  ngOnInit(): void {
    this.industryService.setIndustriesFromContent(this.industriesContent);
  }

  setCurrentIndustry(pIndustry: IndustryClass): void {
    this.industryService.setCurrentIndustry(pIndustry);
  }
}
