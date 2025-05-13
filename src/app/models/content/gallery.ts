import WixImageClass from './wix-image';

export default class GalleryClass {
  id: string;
  images: WixImageClass[];

  constructor(id: string, images: WixImageClass[]) {
    this.id = id;
    this.images = images;
  }
}
