import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Product} from "./product";

@Injectable()
export class ProductService {

  private productPath: string = '/cvsi-server/product';

  private products: Product[];

  constructor(private http: Http) {}

  getProducts() {

    let headers = new Headers();
    headers.append('Content-Type', 'applciation/json');
    let options = new RequestOptions({headers});

    return this.http.get(this.productPath, options);
  }

  getProduct(id: string) {

    let headers = new Headers();
    headers.append('Content-Type', 'applciation/json');

    let options = new RequestOptions({headers});

    return this.http.get(this.productPath + '/${id}', options);
  }

}
