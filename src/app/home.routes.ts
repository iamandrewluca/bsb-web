import {RouterConfig} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth-guard";

export const HomeRoutes: RouterConfig = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];