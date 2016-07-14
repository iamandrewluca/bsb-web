import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class ProductService {

  private productPath: string = '/cvsi-server/product';

  products: any;

  constructor(private http: Http) {}

  getProducts() {

    let headers = new Headers();
    headers.append('Content-Type', 'applciation/json');
    let options = new RequestOptions({headers});

    return this.http.get(this.productPath, options);
  }

}
