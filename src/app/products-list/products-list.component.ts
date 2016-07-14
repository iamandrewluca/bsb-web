import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(res => this.products = res.json().products);
  }

}
