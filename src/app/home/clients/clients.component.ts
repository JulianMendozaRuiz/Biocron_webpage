import { Component, Input } from '@angular/core';
import WixImageClass from '../../models/content/wix-image';
import GalleryClass from '../../models/content/gallery';

@Component({
  selector: 'comp-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  @Input() sideImage: WixImageClass | null = null;
  @Input() tag: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() clientLogos: GalleryClass | null = null;
}
