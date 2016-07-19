/* tslint:disable:no-unused-variable */

import {describe, expect, it, inject} from "@angular/core/testing";
import {RegisterComponent} from "./register.component";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

describe('Component: Register', () => {
  it('should create an instance', inject([Router, AuthService], (router: Router, authService: AuthService) => {
    let component = new RegisterComponent(router, authService);
    expect(component).toBeTruthy();
  }));
});
