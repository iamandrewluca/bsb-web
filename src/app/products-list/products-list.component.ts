import {Component, OnInit} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  isLoadingProducts: boolean = false;

  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.isLoadingProducts = true;
    this.productService.getProducts()
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
