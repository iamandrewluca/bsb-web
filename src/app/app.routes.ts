import {provideRouter, RouterConfig} from "@angular/router";
import {AuthRoutes, APP_AUTH_PROVIDERS} from "./routes/auth.routes";
import {HomeRoutes, APP_HOME_PROVIDERS} from "./routes/home.routes";

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
  APP_AUTH_PROVIDERS,
  APP_HOME_PROVIDERS
];
