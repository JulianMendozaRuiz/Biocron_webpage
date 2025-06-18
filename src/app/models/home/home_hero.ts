export default class HomeHeroClass {
  id: string;
  title: string;
  description: string;
  images: string[];
  buttonText: string;

  constructor(
    id: string,
    title: string,
    description: string,
    images: string[],
    buttonText: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.images = images;
    this.buttonText = buttonText;
  }
}
