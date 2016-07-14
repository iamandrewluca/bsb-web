import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();

    var obfuscator = document.getElementsByClassName('mdl-layout__obfuscator').item(0);
    var drawerLinks = document.querySelectorAll('.bsb-nav a');

    for (var i = 0; i < drawerLinks.length; ++i) {
      drawerLinks.item(i).addEventListener('click', function () {
        obfuscator.dispatchEvent(new MouseEvent('click'));
      });
    }
  }

}
