import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishList } from './wish-list.model';


const baseUrl = 'http://127.0.0.1:8000/api/wish-list/';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<WishList[]> {
    return this.http.get<WishList[]>(baseUrl);
  }
  get(id: any): Observable<WishList> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getUser(id: any): Observable<WishList> {
    return this.http.get(`${baseUrl}user/${id}/`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}${id}/`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}