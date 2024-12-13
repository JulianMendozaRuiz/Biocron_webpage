import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comp-key-services',
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent implements OnInit {
  @Input() content: any;

  headingContent: any;
  industriesContent: any;
  ngOnInit(): void {
    this.headingContent = this.content.heading;
    this.industriesContent = this.content.industries;
  }
}
