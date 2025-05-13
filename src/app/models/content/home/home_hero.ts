export default class HomeHeroClass {
  id: string;
  title: string;
  description: string;
  images: String[];

  constructor(
    id: string,
    title: string,
    description: string,
    images: String[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.images = images;
  }
}
