import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Product} from "../models/product";
import {environment} from "../environment";
import {AuthHttp} from "angular2-jwt/angular2-jwt";

@Injectable()
export class ProductService {

  private productPath: string = 'product/';

  private products: Product[];

  constructor(private authHttp: AuthHttp) {}

  getProducts() {

    let headers = this.getTypeHeaders();
    return this.authHttp.get(environment.apiPath + this.productPath, {headers});
  }

  getProduct(id: string) {

    let headers = this.getTypeHeaders();
    return this.authHttp.get(environment.apiPath + this.productPath + id, {headers});
  }

  getTypeHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

}
