import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-view-heading',
  templateUrl: './view-heading.component.html',
  styleUrl: './view-heading.component.scss',
})
export class ViewHeadingComponent {
  @Input() viewName: string | null = null;
  @Input() viewTitle: string | null = null;
  @Input() viewDescription: string | null = null;
  @Input() compact: boolean = false;
}
