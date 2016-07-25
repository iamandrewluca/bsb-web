/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductEditComponent } from './product-edit.component';

describe('Component: ProductEdit', () => {
  it('should create an instance', () => {
    let component = new ProductEditComponent();
    expect(component).toBeTruthy();
  });
});
