import { Injectable } from '@angular/core';
import ServiceClass from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  services: ServiceClass[] | null = null;

  public setServicesFromContent(pServicesContent: any): void {
    if (
      pServicesContent === null ||
      typeof pServicesContent !== 'object' ||
      pServicesContent.length === 0
    )
      throw new Error('Invalid services content');

    try {
      this.services = pServicesContent.map((serviceData: any) => {
        return new ServiceClass(
          serviceData.title,
          serviceData.description,
          serviceData.deep_description,
          serviceData.image
        );
      });
    } catch {
      throw new Error('Invalid service in services content');
    }
  }
}
