import { Component } from '@angular/core';
import { ServiceService } from '../../_app-services/service.service';

@Component({
  selector: 'comp-key-services',
  templateUrl: './key-services.component.html',
  styleUrl: './key-services.component.scss',
})
export class KeyServicesComponent {
  constructor(protected serviceService: ServiceService) {}
}
