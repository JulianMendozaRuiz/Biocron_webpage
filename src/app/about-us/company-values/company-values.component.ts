import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-company-values',
  templateUrl: './company-values.component.html',
  styleUrl: './company-values.component.scss',
})
export class CompanyValuesComponent {
  @Input() values: any[] = [];
  @Input() image: any;
}
