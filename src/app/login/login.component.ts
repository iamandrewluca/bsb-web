import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit() {

    this.authService.login(this.email, this.password).subscribe((result) => {
      if (result) {
        this.router.navigate(['home']);
      }
    });

  }

}
