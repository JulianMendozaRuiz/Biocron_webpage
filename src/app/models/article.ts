export default class ArticleClass extends Object {
  constructor(
    public id: string,
    public tag: string,
    public title: string,
    public mainImage: string,
    public datePublished: Date,
    public content: Object,
    public author: string,
    public originalPostLink: string,
    public isFeatured: boolean
  ) {
    super();
  }
}
