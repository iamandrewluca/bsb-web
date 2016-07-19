import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent, environment} from "./app/";
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {AuthHttp, AuthConfig} from "angular2-jwt/angular2-jwt";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [

  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,

  {
    provide: AuthHttp,
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig({
        headerName: 'X-Auth-Token',
        noTokenScheme: true,
        globalHeaders: [{'Content-Type':'application/json'}]
      }), http);
    },
    deps: [Http]
  },

  provideForms(),
  disableDeprecatedForms(),
]).catch(err => console.log(err));

