import {Component, OnInit, AfterViewInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

  email: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }

  onSubmit() {
    this.authService.forgot(this.email);
    this.router.navigate(['auth']);
  }

}
