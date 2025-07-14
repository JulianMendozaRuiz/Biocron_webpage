import { Component, Input } from '@angular/core';
import WixImageClass from '../../models/content/wix-image';

@Component({
  selector: 'comp-especial-heading',
  templateUrl: './especial-heading.component.html',
  styleUrl: './especial-heading.component.scss',
})
export class EspecialHeadingComponent {
  @Input() viewName!: string;
  @Input() viewTitle!: string;
  @Input() viewDescription!: string;
  @Input() backgroundImage!: WixImageClass;
  @Input() compact: boolean = false;
}
