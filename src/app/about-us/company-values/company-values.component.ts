import { Component, Input, OnInit } from '@angular/core';
import ValueClass from '../../models/value';
import { AboutUsService } from '../../_app-services/about-us/about-us.service';
import WixImageClass from '../../models/content/wix-image';

@Component({
  selector: 'comp-company-values',
  templateUrl: './company-values.component.html',
  styleUrl: './company-values.component.scss',
})
export class CompanyValuesComponent implements OnInit {
  @Input() image: WixImageClass | null = null;
  @Input() title: string | null = null;

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
