import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ValueClass from '../../models/value';
import { WixService } from '../wix/wix.service';
import AboutUsHeadingClass from '../../models/about_us/about_us_heading';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/home/type_enum';
import { WixMediaService } from '../wix/wix-media.service';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  constructor(
    private wixService: WixService,
    private wixMediaservice: WixMediaService
  ) {}

  values: ValueClass[] | null = null;
  currentValue: Subject<ValueClass | null> = new Subject<ValueClass | null>();

  async getAboutUsHeadingContent(): Promise<any> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('about_us_static_content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'especial_heading')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { name, title, description } = response.items[0]['content'][0];

      return new AboutUsHeadingClass(
        response.items[0]._id,
        name,
        title,
        description
      );
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  async getAboutUsHeadingBackgroundImage(): Promise<any> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('about_us_static_content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'especial_heading')
        .eq('section', 'background')
        .eq('type', typeEnum.IMAGE)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { single_image } = response.items[0];

      return this.wixMediaservice.createImageFromUrl(single_image);
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  public setValuesFromContent(pValuesContent: any): void {
    if (
      pValuesContent === null ||
      typeof pValuesContent !== 'object' ||
      pValuesContent.length === 0
    )
      throw new Error('Invalid values content');

    try {
      this.values = pValuesContent.map((valueData: any) => {
        return new ValueClass(
          valueData.title,
          valueData.description,
          valueData.img
        );
      });

      this.currentValue.next(this.values![0]);
    } catch (error) {
      throw new Error('Invalid values content');
    }
  }

  public setCurrentValue(value: ValueClass): void {
    this.currentValue.next(value);
  }
}
