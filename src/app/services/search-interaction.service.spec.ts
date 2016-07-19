/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SearchInteractionService } from './search-interaction.service';

describe('SearchInteraction Service', () => {
  beforeEachProviders(() => [SearchInteractionService]);

  it('should ...',
      inject([SearchInteractionService], (service: SearchInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
