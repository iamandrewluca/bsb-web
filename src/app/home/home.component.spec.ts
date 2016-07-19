/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {HomeComponent} from "./home.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

describe('Component: Home', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    let component = new HomeComponent(router, authService);
    expect(component).toBeTruthy();
  }));
});
