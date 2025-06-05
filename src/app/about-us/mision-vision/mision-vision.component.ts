import { Component, Input } from '@angular/core';
import AboutUsCoreClass from '../../models/about_us/about_us_core';
import WixImageClass from '../../models/content/wix-image';

@Component({
  selector: 'comp-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.scss',
})
export class MisionVisionComponent {
  @Input() mision: AboutUsCoreClass | null = null;
  @Input() missionBackgroundImage: WixImageClass | null = null;
  @Input() vision: AboutUsCoreClass | null = null;
  @Input() visionBackgroundImage: WixImageClass | null = null;
}
