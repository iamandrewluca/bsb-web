import {RouterConfig} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth-guard";
import {AuthService} from "./auth.service";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {LoginComponent} from "./login/login.component";
import {HomeGuard} from "./home-guard";

export const AuthRoutes: RouterConfig = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [HomeGuard],
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotPasswordComponent },
      { path: '', component: LoginComponent }
    ]
  }
];

export const APP_AUTH_PROVIDERS = [AuthGuard, HomeGuard, AuthService];