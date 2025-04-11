import { Component } from '@angular/core';
// TODO: Remove content and centralize it in the service
import content from '../../assets/content/about_us_content.json';

@Component({
  selector: 'comp-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  aboutUsContent: any;
  headingContent: any;

  constructor() {
    this.aboutUsContent = content.about_us;
    this.headingContent = content.heading;
  }
}
