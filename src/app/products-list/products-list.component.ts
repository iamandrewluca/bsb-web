import {Component, OnInit, Input, OnDestroy} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {Router} from "@angular/router";
import {SearchInteractionService} from "../services/search-interaction.service";
import {Subscription} from "rxjs/Rx";
import {SearchProduct} from "../models/search-product";

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  searchSubscription: Subscription;
  requestProductsSubscription: Subscription;
  productsSubscription: Subscription;

  isLoadingProducts: boolean = false;

  products: Product[] = [];

  constructor(private router: Router,
              private productService: ProductService,
              private searchInteractionService: SearchInteractionService) {

    this.productsSubscription = productService.productsObservable$
      .subscribe((updatedProducts) => {
        this.products = updatedProducts;
        this.isLoadingProducts = false;
      });

    this.searchSubscription = searchInteractionService.searchAnnounced$
      .subscribe((searchProduct: SearchProduct) => {
        console.log(searchProduct);
        this.getProducts(searchProduct);
      });
  }

  ngOnInit() {
    this.getProducts(new SearchProduct());
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
    this.requestProductsSubscription.unsubscribe();
  }

  getProducts(searchProduct: SearchProduct) {

    this.isLoadingProducts = true;

    // Stop request
    if (this.requestProductsSubscription != undefined && !this.requestProductsSubscription.isUnsubscribed) {
      this.requestProductsSubscription.unsubscribe();
    }

    this.requestProductsSubscription = this.productService.getAll(searchProduct);
  }

  showProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  newProduct() {
    this.router.navigate(['product']);
  }


}
