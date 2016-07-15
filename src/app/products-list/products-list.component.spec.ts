/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import {ProductService} from "../product.service";

describe('Component: ProductsList', () => {
  it('should create an instance', inject([ProductService], (productService: ProductService) => {
    // let component = new ProductsListComponent(productService);
    // expect(component).toBeTruthy();
  }));
});
