export default class WixImageClass {
  alt: string;
  description: string;
  fileName: string;
  settings: {
    width: number;
    height: number;
    focalPoint: number[];
  };
  slug: string;
  src: string;
  media: {
    id: string;
    url: string;
    height: number;
    width: number;
    altText?: string;
    filename?: string;
  };
  title: string;
  type: string;

  constructor(
    alt: string,
    description: string,
    fileName: string,
    settings: {
      width: number;
      height: number;
      focalPoint: number[];
    },
    slug: string,
    src: string,
    media: {
      id: string;
      url: string;
      height: number;
      width: number;
      altText?: string;
      filename?: string;
    },
    title: string,
    type: string
  ) {
    this.alt = alt;
    this.description = description;
    this.fileName = fileName;
    this.settings = settings;
    this.slug = slug;
    this.src = src;
    this.media = media;
    this.title = title;
    this.type = type;
  }
}
