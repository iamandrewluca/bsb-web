export class SearchProduct {
  constructor(
    public title: string = '',
    public currency: string = '',
    public minPrice: number = 0,
    public maxPrice: number = 0,
    public categoryEnumList: string[] = [],
    public minCreatedDate: number = 0,
    public maxCreatedDate: number = 0,
    public count: number = 0,
    public offset: number = 0,
    public myProducts: boolean = false) {}
}
