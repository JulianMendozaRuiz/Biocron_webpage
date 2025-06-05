export default class ServiceClass {
  id: string;
  title: string;
  description: string;
  deep_description: string;
  image: {
    id: string;
    url: string;
    height: number;
    width: number;
    altText?: string;
    filename?: string;
  };

  constructor(
    id: string,
    title: string,
    description: string,
    deep_description: string,
    image: {
      id: string;
      url: string;
      height: number;
      width: number;
      altText?: string;
      filename?: string;
    }
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deep_description = deep_description;
    this.image = image;
  }
}
