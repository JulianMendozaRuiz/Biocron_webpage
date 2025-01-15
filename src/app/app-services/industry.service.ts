import { Injectable } from '@angular/core';
import IndustryClass from '../models/industry';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IndustryService {
  constructor() {}

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

  public setCurrentIndustryByName(industry: IndustryClass): void {
    this.currentIndustry.next(industry);

    // this.currentIndustry =
    //   this.industries?.find((industry) => industry.name === pIndustryName) ||
    //   this.currentIndustry;
  }
}
