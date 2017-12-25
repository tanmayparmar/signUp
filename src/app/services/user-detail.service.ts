import { contentHeaders } from './../helper/http-config';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import {
  Http,
  HttpModule,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDetailService {
  private api_url = 'http://localhost:52705/api/User';
  constructor(private http: Http) {}

  postSignUp(user: User): Observable<User> {
    const options = new RequestOptions({ headers: contentHeaders });
    return this.http
      .post(this.api_url, JSON.stringify(user), options)
      .map(response => response.json() as User);
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get(this.api_url).map(this.extractData);
  }
  private extractData(res: any) {
    const body = res.json();
    return body || {};
  }
}
