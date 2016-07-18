import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthService {

  private loggedIn: boolean = false;

  private loginPath:  string = '/cvsi-server/user/login';
  private registerPath: string = '/cvsi-server/user';
  private forgotPath: string = '/cvsi-server/forgot';

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email: string, password: string) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({headers});
    let body = JSON.stringify({email, password});

    return this.http.post(this.loginPath, body, options)
      .map(res => res.json())
      .map((res: any) => {

        if (res.succes) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.succes;
      })
      .catch(this.handleLoginError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  register(email: string, name: string, password: string,
           phone: string, surname: string, userName: string) {

    let headers = new Headers();
    headers.append('Content-type', 'application/json');

    let options = new RequestOptions({headers});
    let body = JSON.stringify({email, name, password, phone, surname, userName});

    return this.http.post(this.registerPath, body, options)
      .map(res => res.json())
      .map((res: any) => {

        console.log(res);

        return res;
      })
      .catch(this.handleRegisterError);

  }

  forgot(email: string) {

  }

  private handleLoginError(err: any) {
    // console.log(err);
    return Observable.throw(err);
  }

  private handleRegisterError(err: any) {
    console.log(err);
    return Observable.throw(err);
  }
}
