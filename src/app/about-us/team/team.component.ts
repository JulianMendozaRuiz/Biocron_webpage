import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  @Input() teamContent!: any;
}
