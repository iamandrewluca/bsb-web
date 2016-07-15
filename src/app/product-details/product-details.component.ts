import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";

@Component({
  moduleId: module.id,
  selector: 'app-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product: Product;

  sub: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] != undefined) {


        this.productService.getProducts().map(res => res.json().list)
          .subscribe(products => {
            this.product = products.find(product => product.id == params['id']);
          });

      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
