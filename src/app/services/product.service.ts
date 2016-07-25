import {Injectable} from "@angular/core";
import {Headers} from "@angular/http";
import {Product} from "../models/product";
import {environment} from "../environment";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {SearchProduct} from "../models/search-product";
import {Subject} from "rxjs/Rx";

@Injectable()
export class ProductService {

  private productPath: string = 'product/';
  private products$: Subject<Product[]>;
  private dataStore: { products: Product[] };

  constructor(private authHttp: AuthHttp) {
    this.dataStore = { products: [] };
    this.products$ = new Subject() as Subject<Product[]>;
  }

  get productsObservable$() {
    return this.products$.asObservable();
  }

  readAll(searchProduct: SearchProduct) {

    searchProduct.count = 10;

    let reqUrl = environment.apiPath + this.productPath + this.paramsFromObject(searchProduct);
    let headers = ProductService.getTypeHeaders();

    return this.authHttp.get(reqUrl, {headers})
      .map(res => res.json())
      .subscribe((res: any) => {
        this.dataStore.products = res.list;
        this.products$.next(this.dataStore.products);
      }, error => console.log('Products could not load'));
  }

  read(id: string) {

    let headers = ProductService.getTypeHeaders();
    return this.authHttp.get(environment.apiPath + this.productPath + id, {headers})
      .map(res => res.json())
      .subscribe((res: any) => {
        let notFound = true;

        this.dataStore.products.forEach((item, index) => {
          if (item.id === res.product.id) {
            this.dataStore.products[index] = res.product;
            notFound = false;
          }
        });

        if (notFound) {
          this.dataStore.products.push(res.product);
        }

        this.products$.next(this.dataStore.products);
      }, error => console.log('Product could not load'));
  }

  create(product: Product) {

    let headers = ProductService.getTypeHeaders();
    this.authHttp.post(environment.apiPath + this.productPath, JSON.stringify(product), {headers})
      .map(response => response.json())
      .subscribe(data => {

        this.dataStore.products.push(data.product);
        this.products$.next(this.dataStore.products);
      }, error => console.log('Could not create product.'));
  }

  update(product: Product) {

    let headers = ProductService.getTypeHeaders();
    this.authHttp.put(environment.apiPath + this.productPath + product.id, JSON.stringify(product), {headers})
      .map(response => response.json())
      .subscribe(data => {

        this.dataStore.products.forEach((product, i) => {
          if (product.id === data.id) { this.dataStore.products[i] = data; }
        });
        this.products$.next(this.dataStore.products);

      }, error => console.log('Could not update product.'));
  }

  remove(id: string) {

    let headers = ProductService.getTypeHeaders();
    this.authHttp.delete(environment.apiPath + this.productPath + id, {headers})
      .subscribe(response => {

        this.dataStore.products.forEach((product, i) => {
          if (product.id === id) { this.dataStore.products.splice(i, 1); }
        });
        this.products$.next(this.dataStore.products);

      }, error => console.log('Could not delete product.'));
  }

  static getTypeHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  paramsFromObject(obj: any): string {

    return '?' + Object.keys(obj)
        .filter(key => obj[key])
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        .join('&');

    // return '?' + Object.keys(obj).map(function(key){
    //   return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    // }).join('&');
  }

}
