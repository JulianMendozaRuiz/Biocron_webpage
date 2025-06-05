import ValueClass from '../value';

export default class AboutUsCompanyValuesClass {
  constructor(
    public id: string,
    public title: string,
    public values: ValueClass[]
  ) {}
}
