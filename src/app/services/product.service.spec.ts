/* tslint:disable:no-unused-variable */

import {beforeEachProviders, describe, expect, it, inject} from "@angular/core/testing";
import {ProductService} from "./product.service";

describe('Product Service', () => {
  beforeEachProviders(() => [ProductService]);

  it('should ...',
      inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
