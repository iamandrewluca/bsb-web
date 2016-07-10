/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {AuthComponent} from "./auth.component";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

describe('Component: Auth', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    let component = new AuthComponent(router, authService);
    expect(component).toBeTruthy();
  }));
});
