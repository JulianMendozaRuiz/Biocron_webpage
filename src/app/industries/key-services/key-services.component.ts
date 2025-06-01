import { Component, Input, OnInit } from '@angular/core';
import IndustriesHeadingClass from '../../models/industries/industries_heading';

@Component({
  selector: 'comp-key-services',
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent implements OnInit {
  @Input() heading: IndustriesHeadingClass | null = null;
  @Input() content: any;
  industriesContent: any;

  ngOnInit(): void {
    this.industriesContent = this.content.industries;
  }
}
