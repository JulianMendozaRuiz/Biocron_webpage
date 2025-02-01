import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-why-us',
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent implements OnInit {
  @Input() whyUsContent: any;
  titleSection: any;
  reasons: any;

  ngOnInit(): void {
    this.titleSection = this.whyUsContent.title_section;
    this.reasons = this.whyUsContent.reasons;
  }
}
