/* tslint:disable:no-unused-variable */

import {beforeEachProviders, describe, expect, it, inject} from "@angular/core/testing";
import {SearchInteractionService} from "./search-interaction.service";

describe('SearchInteraction Service', () => {
  beforeEachProviders(() => [SearchInteractionService]);

  it('should ...',
      inject([SearchInteractionService], (service: SearchInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
