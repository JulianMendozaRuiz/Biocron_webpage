import InputClass from '../../input';

export default class HomeContactUsClass {
  constructor(
    public _id: string,
    public tag: string,
    public title: string,
    public form_content: {
      name: InputClass;
      email: InputClass;
      message: InputClass;
      button_text: string;
    }
  ) {
    this._id = _id;
    this.tag = tag;
    this.title = title;
    this.form_content = form_content;
  }
}
