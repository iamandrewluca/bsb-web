/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {HomeGuard} from "./home-guard";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

describe('HomeGuard', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    expect(new HomeGuard(router, authService)).toBeTruthy();
  }));
});
