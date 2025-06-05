import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../_app-services/service/service.service';
import HeadingClass from '../models/shared/heading';

@Component({
  selector: 'comp-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  headingContent: HeadingClass | null = null;

  constructor(protected servicesServices: ServiceService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.headingContent = await this.servicesServices.getServiceHeading();
      if (!this.servicesServices.services) {
        await this.servicesServices.getServices();
      }
    } catch (error) {
      console.error('Error fetching service content:', error);
    }
  }
}
