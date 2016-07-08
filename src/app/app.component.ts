import { Component, AfterViewInit } from '@angular/core';
declare var componentHandler;

@Component({
  moduleId: module.id,
  selector: 'bsb-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}
