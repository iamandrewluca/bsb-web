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

describe('Component: ProductsList', () => {
  it('should create an instance', () => {
    let component = new ProductsListComponent();
    expect(component).toBeTruthy();
  });
});
