import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
  @Input() content: any;

  title: string | null = null;
  description: string | null = null;

  ngOnInit(): void {
    this.title = this.content.team.title;
    this.description = this.content.team.description;
  }
}
