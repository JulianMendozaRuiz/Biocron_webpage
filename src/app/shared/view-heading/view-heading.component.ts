import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-view-heading',
  templateUrl: './view-heading.component.html',
  styleUrl: './view-heading.component.scss',
})
export class ViewHeadingComponent {
  @Input() viewName: any;
  @Input() viewTitle: any;
  @Input() viewDescription: any;
}
