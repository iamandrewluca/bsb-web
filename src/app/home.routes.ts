import {RouterConfig} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth-guard";
import {MyItemsComponent} from "./my-items/my-items.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AboutComponent} from "./about/about.component";
import {TermsComponent} from "./terms/terms.component";
import {SettingsComponent} from "./settings/settings.component";
import {ProfileComponent} from "./profile/profile.component";

export const HomeRoutes: RouterConfig = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductsListComponent },
      { path: 'my-items', component: MyItemsComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];