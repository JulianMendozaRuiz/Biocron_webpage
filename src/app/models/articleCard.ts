import ArticleClass from './article';

export default class ArticleCardClass extends ArticleClass {
  constructor(
    pId: string,
    pTag: string,
    pTitle: string,
    pMainImage: string,
    pDatePublished: Date
  ) {
    super(pId, pTag, pTitle, pMainImage, pDatePublished, {}, '', '', false);
  }
}
