import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {SearchInteractionService} from "../services/search-interaction.service";
import {SearchProduct} from "../models/search-product";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SearchInteractionService]
})
export class HomeComponent implements OnInit, AfterViewInit {

  obfuscator: Element;

  previousSearchText: string = '';
  searchText: string = '';

  searchTimeout: any;

  constructor(private router: Router,
              private authService: AuthService,
              private searchInteractionService: SearchInteractionService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();

    this.obfuscator = document.getElementsByClassName('mdl-layout__obfuscator').item(0);
  }

  closeDrawer() {
    if (document.body.clientWidth < 1025) {
      this.obfuscator.dispatchEvent(new MouseEvent('click'));
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  search() {

    if (this.previousSearchText != this.searchText.trim()) {

      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {

        let searchProduct = new SearchProduct();
        searchProduct.title = this.searchText.trim();
        this.searchInteractionService.announceSearch(searchProduct);

      }, 2000);

      this.previousSearchText = this.searchText.trim();
    }
  }

}
