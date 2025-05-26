import { Component, Input, OnInit } from '@angular/core';
import ValueClass from '../../models/value';
import { AboutUsService } from '../../_app-services/about-us/about-us.service';
import WixImageClass from '../../models/content/wix-image';
import AboutUsCompanyValuesClass from '../../models/about_us/about_us_company_values';

@Component({
  selector: 'comp-company-values',
  templateUrl: './company-values.component.html',
  styleUrl: './company-values.component.scss',
})
export class CompanyValuesComponent implements OnInit {
  @Input() valuesContent: AboutUsCompanyValuesClass | null = null;
  @Input() image: WixImageClass | null = null;

  currentValue: ValueClass | null = null;

  constructor(protected aboutUsService: AboutUsService) {
    this.aboutUsService.currentValue.subscribe((value: ValueClass | null) => {
      this.currentValue = value;
    });
  }

  ngOnInit(): void {
    this.setCurrentValue(this.aboutUsService.values![0]);

    this.aboutUsService.currentValue.subscribe((value: ValueClass | null) => {
      this.currentValue = value;
    });
  }

  setCurrentValue(pValue: ValueClass): void {
    this.aboutUsService.setCurrentValue(pValue);
  }
}
