import {Component, AfterViewInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
declare var componentHandler;

@Component({
  moduleId: module.id,
  selector: 'bsb-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
