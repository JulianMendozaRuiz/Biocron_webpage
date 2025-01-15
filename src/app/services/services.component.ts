import { Component } from '@angular/core';
import content from '../../assets/content/services_content.json';
import { ServiceService } from '../app-services/service.service';

@Component({
  selector: 'comp-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  servicesContent: any;
  headingContent: any;

  constructor(private servicesServices: ServiceService) {
    this.servicesContent = content.services;
    this.headingContent = content.heading;

    this.servicesServices.setServicesFromContent(this.servicesContent);
  }
}
