import { Injectable } from '@angular/core';
import IndustryClass from '../../models/industries/industry';
import { Subject } from 'rxjs';
import { WixService } from '../wix/wix.service';
import { WixMediaService } from '../wix/wix-media.service';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/home/type_enum';
import IndustriesTeamClass from '../../models/industries/industries_team';
import WixImageClass from '../../models/content/wix-image';
import HeadingClass from '../../models/shared/heading';

@Injectable({
  providedIn: 'root',
})
export class IndustryService {
  constructor(
    private wixService: WixService,
    private wixMediaService: WixMediaService
  ) {}

  industries: IndustryClass[] | null = null;
  currentIndustry: Subject<IndustryClass | null> =
    new Subject<IndustryClass | null>();

  public setIndustriesFromContent(pIndustriesContent: any): void {
    if (
      pIndustriesContent === null ||
      typeof pIndustriesContent !== 'object' ||
      pIndustriesContent.length === 0
    )
      throw new Error('Invalid industries content');

    try {
      this.industries = pIndustriesContent.map((industryData: any) => {
        return new IndustryClass(
          industryData.name,
          industryData.img,
          industryData.description,
          industryData.services,
          industryData.benefits
        );
      });

      this.currentIndustry.next(this.industries![0]); // Set the first industry as default
    } catch {
      throw new Error('Invalid industry in industry content');
    }
  }

  public setCurrentIndustry(industry: IndustryClass): void {
    this.currentIndustry.next(industry);
  }

  async getIndustriesHeading(): Promise<HeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.INDUSTRIES)
        .eq('sub_module', 'heading')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No industries heading content found');
      }

      const { title, name, description } = response.items[0]['content'][0];
      return new HeadingClass(response.items[0]._id, name, title, description);
    } catch (error) {
      console.error('Error fetching industries heading:', error);
      throw error;
    }
  }

  async getIndustriesTeamContent(): Promise<IndustriesTeamClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.INDUSTRIES)
        .eq('sub_module', 'team')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No industries team content found');
      }

      const { title, description } = response.items[0]['content'][0];
      return new IndustriesTeamClass(response.items[0]._id, title, description);
    } catch (error) {
      console.error('Error fetching industries team content:', error);
      throw error;
    }
  }

  async getIndustriesTeamBackground(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.INDUSTRIES)
        .eq('sub_module', 'team')
        .eq('section', 'background')
        .eq('type', typeEnum.IMAGE)
        .find();

      if (response.items.length === 0) {
        throw new Error('No industries team background found');
      }

      const { single_image } = response.items[0];

      return this.wixMediaService.createImageFromUrl(single_image);
    } catch (error) {
      console.error('Error fetching industries team background:', error);
      throw error;
    }
  }

  async getIndustriesContent(): Promise<void> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Industries-content')
        .ascending('order_number')
        .find();

      if (response.items.length === 0) {
        throw new Error('No industries content found');
      }

      const industries = response.items.map((item: any) => {
        return new IndustryClass(
          item.name,
          this.wixMediaService.createImageFromUrl(item.image),
          item.description,
          item.services,
          item.benefits
        );
      });

      this.setCurrentIndustry(industries[0]); // Set the first industry as default
      this.setIndustriesFromContent(industries);
    } catch (error) {
      console.error('Error fetching industries content:', error);
      throw error;
    }
  }
}
