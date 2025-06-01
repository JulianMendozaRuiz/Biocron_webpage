import { Injectable } from '@angular/core';
import IndustryClass from '../../models/industries/industry';
import { Subject } from 'rxjs';
import { WixService } from '../wix/wix.service';
// TODO: Uncomment when WixMediaService after implementation requieres it
// import { WixMediaService } from '../wix/wix-media.service';
import IndustriesHeadingClass from '../../models/industries/industries_heading';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/home/type_enum';

@Injectable({
  providedIn: 'root',
})
export class IndustryService {
  constructor(
    private wixService: WixService // private wixMediaService: WixMediaService
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
          industryData.img_location,
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

  async getIndustriesHeading(): Promise<IndustriesHeadingClass> {
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
      return new IndustriesHeadingClass(
        response.items[0]._id,
        name,
        title,
        description
      );
    } catch (error) {
      console.error('Error fetching industries headings:', error);
      throw error;
    }
  }
}
