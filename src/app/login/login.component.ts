import {Component, AfterViewInit} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements AfterViewInit {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }

  onSubmit() {

    // this.authService.register('thendrluca@gmail.com', 'andasdrei', 'jorajorajora', '123456789', 'luca', 'anaasdsddrei')
    //   .subscribe(res => console.log(res));

    this.authService.login(this.email, this.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['home']);
      }
    });

  }

}
