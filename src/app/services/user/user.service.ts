import {environment} from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.API.API_USER;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<any>>(this.url);
  }
  getId(id: number) {
    return this.http.get<any>(this.url + id);
  }
  getUserByEmail(email: String, headers) {
    return this.http.post(this.url + 'api/user/informations', {email}, headers);

  }

  add(user: User){
    return this.http.post(this.url, user);
  }
  
}
