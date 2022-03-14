import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from './color.model';

const baseUrl = 'http://127.0.0.1:8000/api/color/';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Color[]> {
    return this.http.get<Color[]>(baseUrl);
  }
  get(id: any): Observable<Color> {
    return this.http.get(`${baseUrl}${id}`);
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
  findByTitle(name: any): Observable<Color[]> {
    return this.http.get<Color[]>(`${baseUrl}?name=${name}`);
  };
}