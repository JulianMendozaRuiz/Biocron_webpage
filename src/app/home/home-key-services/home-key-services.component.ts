import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../_app-services/service.service';

@Component({
  selector: 'comp-home-key-services',
  templateUrl: './home-key-services.component.html',
  styleUrl: './home-key-services.component.scss',
})
export class HomeKeyServicesComponent implements OnInit {
  @Input() keyServicesContent: any;

  constructor(protected servicesService: ServiceService) {}

  ngOnInit(): void {
    this.servicesService.setServicesFromContent(this.keyServicesContent);
  }
}
