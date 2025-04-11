import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-simplified-key-service-card',
  templateUrl: './simplified-key-service-card.component.html',
  styleUrl: './simplified-key-service-card.component.scss',
})
export class SimplifiedKeyServiceCardComponent {
  @Input() name: String | null = null;
  @Input() title: String | null = null;
  @Input() description: String | null = null;
  @Input() background_image: String | null = null;
}
