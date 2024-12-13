import { Component, Input, OnInit } from '@angular/core';
import { IndustryService } from '../../../app-services/industry.service';

@Component({
  selector: 'comp-industries-area',
  templateUrl: './industries-area.component.html',
  styleUrl: './industries-area.component.scss',
})
export class IndustriesAreaComponent implements OnInit {
  @Input() industriesContent: any;

  constructor(protected industryService: IndustryService) {}

  ngOnInit(): void {
    this.industryService.setIndustries(this.industriesContent);
  }
}
