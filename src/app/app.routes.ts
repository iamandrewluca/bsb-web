import {provideRouter, RouterConfig} from "@angular/router";
import {AuthRoutes, AUTH_PROVIDERS} from "./auth.routes";
import {HomeRoutes, HOME_PROVIDERS} from "./home.routes";

export const appRoutes: RouterConfig = [
  ...AuthRoutes,
  ...HomeRoutes,
  {
    // Handle unknown paths
    path: '**',
    redirectTo: '/',
    pathMatch: 'prefix'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes),
  AUTH_PROVIDERS,
  HOME_PROVIDERS
];
