export default class ArticleClass {
  constructor(
    public id: string,
    public tag: string,
    public title: string,
    public mainImage: string,
    public datePublished: Date,
    public content: object,
    public author: string,
    public originalPostLink: string,
    public isFeatured: boolean
  ) {}
}
