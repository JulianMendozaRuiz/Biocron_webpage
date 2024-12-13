export default class ContactFormClass extends Object {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public message: string
  ) {
    super();
  }
}
