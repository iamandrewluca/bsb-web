/* tslint:disable:no-unused-variable */

import {beforeEachProviders, describe, expect, it, inject} from "@angular/core/testing";
import {AppComponent} from "./app.component";

beforeEachProviders(() => [AppComponent]);

describe('App: BsbWeb', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
