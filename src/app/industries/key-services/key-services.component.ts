import { Component, Input } from '@angular/core';
import IndustriesHeadingClass from '../../models/industries/industries_heading';

@Component({
  selector: 'comp-key-services',
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent {
  @Input() heading: IndustriesHeadingClass | null = null;
}
