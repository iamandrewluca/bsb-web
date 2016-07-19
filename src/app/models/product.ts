export class Product {
  constructor(public id: string,
  public borrow: boolean,
  public categoryEnumList: string[],
  public createdDate: number,
  public currency: string,
  public description: string,
  public limitDate: number,
  public price: number,
  public title: string,
  public updatedDate: number) {}
}
