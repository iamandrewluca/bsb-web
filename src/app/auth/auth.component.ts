import {Component, AfterViewInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AuthComponent implements AfterViewInit {

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }

}
