import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";

@Component({
  moduleId: module.id,
  selector: 'app-products-list',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService: ProductService) {
    this.productService.getProducts()
      .subscribe(res => console.log(res.json()));
  }

  ngOnInit() {
  }

}
