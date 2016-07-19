import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
declare var componentHandler: any;

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  name: string;
  surname: string;
  email: string;
  userName: string;
  phone: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }

  onSubmit() {
    this.authService.register(this.email, this.name,this.password, this.phone, this.surname, this.userName)
      .subscribe(res => console.log(res));
    this.router.navigate(['auth']);
  }

}
