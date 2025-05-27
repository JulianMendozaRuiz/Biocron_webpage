interface reason {
  title: string;
  description: string;
}

export default class AboutUsWhyUsClass {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public reasons: reason[]
  ) {}
}
