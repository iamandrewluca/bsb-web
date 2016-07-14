/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MyItemsComponent } from './my-items.component';

describe('Component: MyItems', () => {
  it('should create an instance', () => {
    let component = new MyItemsComponent();
    expect(component).toBeTruthy();
  });
});
