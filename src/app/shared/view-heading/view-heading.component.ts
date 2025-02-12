import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-view-heading',
  templateUrl: './view-heading.component.html',
  styleUrl: './view-heading.component.scss',
})
export class ViewHeadingComponent {
  @Input() viewName: String | null = null;
  @Input() viewTitle: String | null = null;
  @Input() viewDescription: String | null = null;
  @Input() compact: boolean = false;
}
