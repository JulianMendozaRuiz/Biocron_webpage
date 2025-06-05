import { Component, Input } from '@angular/core';
import HeadingClass from '../../models/shared/heading';

@Component({
  selector: 'comp-key-services',
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent {
  @Input() heading: HeadingClass | null = null;
}
