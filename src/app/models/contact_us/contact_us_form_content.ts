export default class ContactUsFormContentClass {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public quote: string,
    public quote_author: string,
    public contact_name: {
      label: string;
      placeholder: string;
    },
    public email: {
      label: string;
      placeholder: string;
    },
    public phone: {
      label: string;
      placeholder: string;
    },
    public message: {
      label: string;
      placeholder: string;
    },
    public button_text: string
  ) {}
}
