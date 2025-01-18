import { Component, Input, OnInit } from '@angular/core';
import ServiceClass from '../../../models/service';

@Component({
  selector: 'comp-key-service-card',
  templateUrl: './key-service-card.component.html',
  styleUrl: './key-service-card.component.scss',
})
export class KeyServiceCardComponent implements OnInit {
  @Input() service: ServiceClass | null = null;
  @Input() position!: number;
  title: string = '';
  description: string = '';
  deep_description: string = '';
  image: string = '';

  constructor() {}

  ngOnInit() {
    if (this.service !== null) {
      this.title = this.service.title;
      this.description = this.service.description;
      this.deep_description = this.service.deep_description;
      this.image = this.service.image;
    }
  }
}
