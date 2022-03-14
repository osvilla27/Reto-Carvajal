import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Size } from './size.model';

const baseUrl = 'http://127.0.0.1:8000/api/size/';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Size[]> {
    return this.http.get<Size[]>(baseUrl);
  }
  get(id: any): Observable<Size> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }
  findByTitle(name: any): Observable<Size[]> {
    return this.http.get<Size[]>(`${baseUrl}?name=${name}`);
  };
}