/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {AuthGuard} from "./auth-guard";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

describe('AuthGuard', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    expect(new AuthGuard(router, authService)).toBeTruthy();
  }));
});
