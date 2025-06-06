import { Injectable } from '@angular/core';
import { media } from '@wix/sdk';
import WixImageClass from '../../models/content/wix-image';

@Injectable({
  providedIn: 'root',
})
export class WixMediaService {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createMediaGallery(pGallery: any[]): WixImageClass[] {
    try {
      const gallery: WixImageClass[] = pGallery.map((image) => {
        return this.createImage(image);
      });
      return gallery;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }

  createImageFromUrl(pImage: string): WixImageClass {
    try {
      const mediaObj = media.getImageUrl(pImage);

      return new WixImageClass('', '', '', null, '', '', mediaObj, '', '');
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createImage(pImage: any): WixImageClass {
    try {
      const mediaObj = media.getImageUrl(pImage.src);

      return new WixImageClass(
        pImage.alt,
        pImage.description,
        pImage.fileName,
        pImage.settings,
        pImage.slug,
        pImage.src,
        mediaObj,
        pImage.title,
        pImage.type
      );
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }
}
