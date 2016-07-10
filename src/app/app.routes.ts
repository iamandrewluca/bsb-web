import {provideRouter, RouterConfig} from "@angular/router";
import {AuthRoutes, AUTH_PROVIDERS} from "./auth.routes";
import {HomeRoutes} from "./home.routes";

export const appRoutes: RouterConfig = [
  ...AuthRoutes,
  ...HomeRoutes,
  {
    // Handle unknown paths
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes),
  AUTH_PROVIDERS
];
