/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {LoginComponent} from "./login.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

describe('Component: Login', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    let component = new LoginComponent(router, authService);
    expect(component).toBeTruthy();
  }));
});
