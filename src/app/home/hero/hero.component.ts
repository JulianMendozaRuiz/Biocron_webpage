import { Component, Input } from '@angular/core';
import GalleryClass from '../../models/content/gallery';

@Component({
  selector: 'comp-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() images!: GalleryClass;
  @Input() title: any;
  @Input() description: any;
}
