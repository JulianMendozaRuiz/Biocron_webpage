export default class HomeHeroClass {
  id: string;
  title: string;
  description: string;
  images: string[];

  constructor(
    id: string,
    title: string,
    description: string,
    images: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.images = images;
  }
}
