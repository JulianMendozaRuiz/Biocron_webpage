import { Injectable } from '@angular/core';
import ServiceClass from '../../models/service';
import { media } from '@wix/sdk';
import ModulesEnum from '../../models/content/modules_enum';
import ServiceHeadingClass from '../../models/content/_service/service_heading';
import { WixService } from '../wix/wix.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private wixService: WixService) {}

  services: ServiceClass[] | null = null;

  async getServiceHeading(): Promise<ServiceHeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.SERVICES)
        .eq('sub_module', 'heading')
        .eq('type', 'json')
        .find();

      if (response.items.length === 0) {
        throw new Error('No services found');
      }

      console.log('Service content response:', response);

      const { name, title, description } = response.items[0]['content'][0];

      return new ServiceHeadingClass(
        response.items[0]._id,
        name,
        title,
        description
      );
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

      return (this.services = this.processServiceData(response.items));
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  }

  processServiceData(serviceData: any[]): ServiceClass[] {
    return serviceData.map((service: any) => {
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
