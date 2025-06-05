import { Component, Input } from '@angular/core';
import WixImageClass from '../../models/content/wix-image';
import IndustriesTeamClass from '../../models/industries/industries_team';

@Component({
  selector: 'comp-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  @Input() content: IndustriesTeamClass | null = null;
  @Input() background: WixImageClass | null = null;
}
