import WixImageClass from '../content/wix-image';

export default class IndustryClass {
  constructor(
    public name: string,
    public img: WixImageClass,
    public description: string,
    public services: string[],
    public benefits: string[]
  ) {}
}
