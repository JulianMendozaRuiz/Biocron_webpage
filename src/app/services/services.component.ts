import { Component } from '@angular/core';
// TODO: Remove content and centralize it in the service
import content from '../../assets/content/services_content.json';
import { ServiceService } from '../_app-services/service.service';

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
