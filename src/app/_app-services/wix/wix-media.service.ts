import { Injectable } from '@angular/core';
import { media } from '@wix/sdk';
import WixImageClass from '../models/content/wix-image';

@Injectable({
  providedIn: 'root',
})
export class WixMediaService {
  constructor() {}

  createMediaGallery(pGallery: any[]): WixImageClass[] {
    try {
      const gallery: WixImageClass[] = pGallery.map((image) => {
        const mediaObj = media.getImageUrl(image.src);

        return new WixImageClass(
          image.alt,
          image.description,
          image.fileName,
          image.settings,
          image.slug,
          image.src,
          mediaObj,
          image.title,
          image.type
        );
      });
      return gallery;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
  }
}
