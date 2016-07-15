/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NewProductComponent } from './new-product.component';

describe('Component: NewProduct', () => {
  it('should create an instance', () => {
    let component = new NewProductComponent();
    expect(component).toBeTruthy();
  });
});
