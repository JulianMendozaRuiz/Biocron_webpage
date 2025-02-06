import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() images: any;
  @Input() title: any;
  @Input() description: any;
}
