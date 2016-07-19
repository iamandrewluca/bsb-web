import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Rx";
import {environment} from "../environment";

@Injectable()
export class AuthService {

  private loggedIn: boolean = false;

  private loginPath:  string = 'auth';
  private registerPath: string = 'user';
  private forgotPath: string = 'forgot';

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('id_token');
  }

  login(email: string, password: string) {

    let body = JSON.stringify({email, password});
    let headers = this.getTypeHeaders();

    return this.http.post(environment.apiPath + this.loginPath, body, {headers})
      .map(res => res.json())
      .map((res: any) => {

        if (res.error == "SUCCESS") {
          localStorage.setItem('id_token', res.token);
          this.loggedIn = true;
        }

        return res.error;
      })
      .catch(this.handleLoginError);
  }

  logout() {
    localStorage.removeItem('id_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  register(email: string, name: string, password: string,
           phone: string, surname: string, userName: string) {

    let body = JSON.stringify({email, name, password, phone, surname, userName});
    let headers = this.getTypeHeaders();

    return this.http.post(environment.apiPath + this.registerPath, body, {headers})
      .map(res => res.json())
      .map((res: any) => {

        console.log(res);

        if (res.error == 'SUCCESS') {
          // registration was successful
        }

        return res.error;
      })
      .catch(this.handleRegisterError);
  }

  forgot(email: string) {

    let body = JSON.stringify({email});
    let headers = this.getTypeHeaders();

    return this.http.post(environment.apiPath + this.forgotPath, body, {headers})
      .map(res => res.json())
      .map((res: any) => {

        if (res.error == "SUCCESS") {
          // maybe because yes ))
        }
      })
      .catch(this.handleForgotError);
  }

  private handleLoginError(err: any) {
    return Observable.throw(err);
  }

  private handleRegisterError(err: any) {
    return Observable.throw(err);
  }

  private handleForgotError(err: any) {
    return Observable.throw(err);
  }

  getTypeHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }
}
