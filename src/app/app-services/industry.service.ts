import { Injectable } from '@angular/core';
import IndustryClass from '../models/industry';

@Injectable({
  providedIn: 'root',
})
export class IndustryService {
  constructor() {}

  industries: IndustryClass[] | null = null;
  currentIndustry: IndustryClass | null = null;

  public setIndustries(pIndustriesContent: any): void {
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

      this.currentIndustry = this.industries![0]; // Set the first industry as default
    } catch {
      throw new Error('Invalid industry in industry content');
    }
  }
}
