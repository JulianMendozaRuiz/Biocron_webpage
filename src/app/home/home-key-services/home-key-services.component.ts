import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../_app-services/_service/service.service';

@Component({
  selector: 'comp-home-key-services',
  templateUrl: './home-key-services.component.html',
  styleUrl: './home-key-services.component.scss',
})
export class HomeKeyServicesComponent implements OnInit {
  @Input() viewName: string = '';
  @Input() viewTitle: string = '';

  constructor(protected servicesService: ServiceService) {}

  async ngOnInit(): Promise<void> {
    if (!this.servicesService.services) {
      await this.servicesService.getServices();
    }
  }
}
