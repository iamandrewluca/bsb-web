import {Component, OnInit, Input, OnDestroy} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {Router} from "@angular/router";
import {SearchInteractionService} from "../services/search-interaction.service";
import {Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  searchSubscription: Subscription;
  getProductsSubscription: Subscription;

  isLoadingProducts: boolean = false;

  products: Product[] = [];

  constructor(private router: Router,
              private productService: ProductService,
              private searchInteractionService: SearchInteractionService) {

    this.searchSubscription = searchInteractionService.searchAnnounced$
      .subscribe((text) => {
        console.log('req');
        this.getProducts();
      });
  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  searchText(text: string) {
    console.log('req');
    this.getProducts();
  }

  getProducts() {

    this.isLoadingProducts = true;

    // Stop request
    if (this.getProductsSubscription != undefined && !this.getProductsSubscription.isUnsubscribed) {
      this.getProductsSubscription.unsubscribe();
    }

    this.getProductsSubscription = this.productService.getProducts()
      .subscribe((res) => {
        this.isLoadingProducts = false;

        this.products.push(...res.json().list);
      });
  }

  showProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  newProduct() {
    this.router.navigate(['product']);
  }


}
