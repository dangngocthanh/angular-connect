import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) {
  }

  index(): Observable<any> {
    return this.http.get<any>(API_URL + 'category/list');
  }

  store(category: any): Observable<any> {
    return this.http.post<any>(API_URL + 'category/store/', category)
  }

  edit(id: number | undefined): Observable<any> {
    return this.http.get<any>(API_URL + 'category/edit/' + id)
  }

  update(category: any): Observable<any> {
    return this.http.post<any>(API_URL + 'category/edit/', category)
  }

  delete(id: number): Observable<any> {
    return this.http.get<any>(API_URL + 'category/delete/' + id)
  }

}
