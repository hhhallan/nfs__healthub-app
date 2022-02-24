import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url = environment.API.API_CAT;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Array<any>>(this.url);
  }

  getId(id: number) {
    return this.http.get<any>(this.url + id);
  }
}
