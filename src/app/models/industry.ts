export default class IndustryClass extends Object {
  constructor(
    public name: string,
    public img_location: string,
    public description: string,
    public services: string[],
    public benefits: string[]
  ) {
    super();
  }
}
