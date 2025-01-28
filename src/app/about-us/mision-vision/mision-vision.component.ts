import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.scss',
})
export class MisionVisionComponent {
  @Input() mision: any;
  @Input() vision: any;
}
