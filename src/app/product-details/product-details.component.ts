import {Component, OnInit, OnDestroy} from "@angular/core";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/product";

@Component({
  moduleId: module.id,
  selector: 'app-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  private product: Product;

  private routeSub: any;
  private productSub: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      if (params['id'] != undefined) {

        this.productSub = this.productService.productsObservable$
          .subscribe((updatedProducts: Product[]) => {
            this.product = updatedProducts.find(product => product.id == params['id']);
          });
        this.productService.read(params['id']);
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.productSub.unsubscribe();
  }

  remove() {
    this.productService.remove(this.product.id);
  }

  edit() {

  }

}
