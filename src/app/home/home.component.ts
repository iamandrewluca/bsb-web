import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "../auth.service";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit, AfterViewInit {

  obfuscator: Element;

  constructor(private router: Router, private authService: AuthService) {}

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

}
