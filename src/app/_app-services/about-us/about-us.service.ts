import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import ValueClass from '../../models/value';
import { WixService } from '../wix/wix.service';
import ModulesEnum from '../../models/content/modules_enum';
import typeEnum from '../../models/content/type_enum';
import { WixMediaService } from '../wix/wix-media.service';
import WixImageClass from '../../models/content/wix-image';
import AboutUsCoreClass from '../../models/about_us/about_us_core';
import AboutUsCompanyValuesClass from '../../models/about_us/about_us_company_values';
import AboutUsTeamClass from '../../models/about_us/about_us_team';
import HeadingClass from '../../models/shared/heading';
import AboutUsWhyUsClass from '../../models/about_us/about_us_why_us';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  constructor(
    private wixService: WixService,
    private wixMediaservice: WixMediaService,
  ) {}

  values: ValueClass[] | null = null;
  currentValue: Subject<ValueClass | null> = new Subject<ValueClass | null>();

  public setValuesFromContent(pValuesContent: ValueClass[]): void {
    if (
      pValuesContent === null ||
      typeof pValuesContent !== 'object' ||
      pValuesContent.length === 0
    )
      throw new Error('Invalid values content');

    try {
      this.values = pValuesContent.map((valueData: ValueClass) => {
        return new ValueClass(
          valueData.title,
          valueData.description,
          valueData.img,
        );
      });

      this.currentValue.next(this.values![0]);
    } catch (error) {
      throw new Error('Invalid values content ' + error);
    }
  }

  public setCurrentValue(value: ValueClass): void {
    try {
      this.currentValue.next(value);
    } catch (error) {
      throw new Error('Error setting current value: ' + error);
    }
  }

  async getAboutUsHeadingContent(): Promise<HeadingClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'especial_heading')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { name, title, description } = response.items[0]['content'][0];

      return new HeadingClass(response.items[0]._id, name, title, description);
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  async getAboutUsHeadingBackgroundImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
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

  async getAboutUsMissionContent(): Promise<AboutUsCoreClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'mission')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { title, description } = response.items[0]['content'][0];

      return new AboutUsCoreClass(response.items[0]._id, title, description);
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  async getAboutUsMissionBackgroundImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'mission')
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

  async getAboutUsVisionContent(): Promise<AboutUsCoreClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'vision')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { title, description } = response.items[0]['content'][0];

      return new AboutUsCoreClass(response.items[0]._id, title, description);
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  async getAboutUsVisionBackgroundImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'vision')
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

  async getAboutUsCompanyValuesContent(): Promise<AboutUsCompanyValuesClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'values')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { title, values } = response.items[0]['content'][0];

      const content = new AboutUsCompanyValuesClass(
        response.items[0]._id,
        title,
        values.map((value: { title: string; description: string }) => {
          return new ValueClass(value.title, value.description, '');
        }),
      );

      this.setCurrentValue(content.values[0]);
      this.setValuesFromContent(content.values);

      return content;
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  async getAboutUsCompanyValuesSideImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'values')
        .eq('section', 'side_image')
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

  async getAboutUsTeamContent(): Promise<AboutUsTeamClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'team')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { title, description } = response.items[0]['content'][0];

      return new AboutUsTeamClass(response.items[0]._id, title, description);
    } catch (error) {
      console.error('Error fetching about us content:', error);
      throw error;
    }
  }

  async getAboutUsTeamBackgroundImage(): Promise<WixImageClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'team')
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

  async getAboutUsWhyUsContent(): Promise<AboutUsWhyUsClass> {
    try {
      if (!this.wixService.wixClient) {
        await this.wixService.createClient();
      }

      const response = await this.wixService
        .wixClient!.items.query('Site-static-content')
        .eq('module', ModulesEnum.ABOUT_US)
        .eq('sub_module', 'why_us')
        .eq('section', 'content')
        .eq('type', typeEnum.JSON)
        .find();

      if (response.items.length === 0) {
        throw new Error('No content found');
      }

      const { title_section, reasons } = response.items[0]['content'][0];

      return new AboutUsWhyUsClass(
        response.items[0]._id,
        title_section.title,
        title_section.description,
        reasons,
      );
    } catch (error) {
      console.error('Error fetching about us why us content:', error);
      throw error;
    }
  }
}
