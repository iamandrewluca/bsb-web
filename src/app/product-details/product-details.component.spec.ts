/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('Component: ProductDetails', () => {
  it('should create an instance', () => {
    let component = new ProductDetailsComponent();
    expect(component).toBeTruthy();
  });
});
