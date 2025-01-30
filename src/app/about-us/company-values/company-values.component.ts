import { Component, Input, OnInit } from '@angular/core';
import { AboutUsService } from '../../_app-services/about-us.service';
import ValueClass from '../../models/value';

@Component({
  selector: 'comp-company-values',
  templateUrl: './company-values.component.html',
  styleUrl: './company-values.component.scss',
})
export class CompanyValuesComponent implements OnInit {
  @Input() valuesContent: any[] = [];
  @Input() image: any;

  currentValue: ValueClass | null = null;

  constructor(protected aboutUsService: AboutUsService) {
    this.aboutUsService.currentValue.subscribe((value: ValueClass | null) => {
      this.currentValue = value;
    });
  }

  ngOnInit(): void {
    this.aboutUsService.setValuesFromContent(this.valuesContent);
  }

  setCurrentValue(pValue: ValueClass): void {
    this.aboutUsService.setCurrentValue(pValue);
  }
}
