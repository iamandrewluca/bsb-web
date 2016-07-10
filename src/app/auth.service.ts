import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthService {

  private loggedIn: boolean = false;
  private loginPath:  string = '/api/login';

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email: string, password: string) {

    let headers = new Headers();
    headers.append('Content-type', 'application/json');

    let options = new RequestOptions({headers});
    let body = JSON.stringify({email,password});

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

  private handleLoginError(err: any) {
    // console.log(err);
    return Observable.throw(err);
  }
}
