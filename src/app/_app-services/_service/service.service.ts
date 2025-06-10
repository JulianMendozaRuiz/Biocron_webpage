import { Injectable } from '@angular/core';
import ServiceClass from '../../models/service';
import { media } from '@wix/sdk';
import ModulesEnum from '../../models/content/modules_enum';
import { WixService } from '../wix/wix.service';
import HeadingClass from '../../models/shared/heading';
import ServiceInterface from '../../models/_services/service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private wixService: WixService) {}

  services: ServiceClass[] | null = null;

  async getServiceHeading(): Promise<HeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.SERVICES)
        .eq('sub_module', 'heading')
        .eq('section', 'heading')
        .eq('type', 'json')
        .find();

      if (response.items.length === 0) {
        throw new Error('No service heading found');
      }

      const { name, title, description } = response.items[0]['content'][0];

      return new HeadingClass(response.items[0]._id, name, title, description);
    } catch (error) {
      console.error('Error fetching service content:', error);
      throw error;
    }
  }

  async getServices(): Promise<ServiceClass[]> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Services-content')
        .find();

      if (response.items.length === 0) {
        throw new Error('No services found');
      }

      return (this.services = this.processServiceData(
        response.items as ServiceInterface[]
      ));
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  }

  processServiceData(serviceData: ServiceInterface[]): ServiceClass[] {
    return serviceData.map((service: ServiceInterface) => {
      return new ServiceClass(
        service._id,
        service.title,
        service.description,
        service.deep_description,
        media.getImageUrl(service.image)
      );
    });
  }
}
