export default class HomeAboutUsClass {
  id: string;
  tag: string;
  description: string;
  backgroundImage: string;
  backgroundParticles: string;

  constructor(
    id: string,
    tag: string,
    description: string,
    backgroundImage: string,
    backgroundParticles: string
  ) {
    this.id = id;
    this.tag = tag;
    this.description = description;
    this.backgroundImage = backgroundImage;
    this.backgroundParticles = backgroundParticles;
  }
}
