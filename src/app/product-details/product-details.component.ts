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

        var id = params['id'];

        this.productService.getProduct(id)
          .map(res => res.json().product)
          .subscribe(product => this.product = product);

      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
