import WixImageClass from './wix-image';

export default class GalleryClass {
  id: string;
  images: WixImageClass[];

  constructor(id: string, images: WixImageClass[]) {
    this.id = id;
    this.images = images;
  }

  get Images(): any[] {
    return this.images.map((image) => ({
      src: image.media.url,
      alt: image.alt,
    }));
  }
}
