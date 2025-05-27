import { Component, Input } from '@angular/core';
import WixImageClass from '../../models/content/wix-image';
import AboutUsTeamClass from '../../models/about_us/about_us_team';

@Component({
  selector: 'comp-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  @Input() teamContent: AboutUsTeamClass | null = null;
  @Input() backgroundImage: WixImageClass | null = null;
}
