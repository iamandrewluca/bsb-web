/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {ForgotPasswordComponent} from "./forgot-password.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

describe('Component: ForgotPassword', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    let component = new ForgotPasswordComponent(router, authService);
    expect(component).toBeTruthy();
  }));
});
