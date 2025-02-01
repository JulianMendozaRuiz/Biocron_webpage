import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-reason-card',
  templateUrl: './reason-card.component.html',
  styleUrl: './reason-card.component.scss',
})
export class ReasonCardComponent {
  @Input() title!: string;
  @Input() description!: string;
}
