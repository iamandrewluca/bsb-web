/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TermsComponent } from './terms.component';

describe('Component: Terms', () => {
  it('should create an instance', () => {
    let component = new TermsComponent();
    expect(component).toBeTruthy();
  });
});
