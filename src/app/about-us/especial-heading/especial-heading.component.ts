import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-especial-heading',
  templateUrl: './especial-heading.component.html',
  styleUrl: './especial-heading.component.scss',
})
export class EspecialHeadingComponent {
  @Input() viewName: any;
  @Input() viewTitle: any;
  @Input() viewDescription: any;
}
