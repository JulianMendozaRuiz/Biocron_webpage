import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-simplified-key-service-card',
  templateUrl: './simplified-key-service-card.component.html',
  styleUrl: './simplified-key-service-card.component.scss',
})
export class SimplifiedKeyServiceCardComponent {
  @Input() name: string | null = null;
  @Input() title: string | null = null;
  @Input() description: string | null = null;
  @Input() background_image: string | null = null;
}
