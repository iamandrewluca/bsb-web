import {RouterConfig} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth-guard";

export const HomeRoutes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];