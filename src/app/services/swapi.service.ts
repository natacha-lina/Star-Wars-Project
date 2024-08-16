import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class SwapiService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getItem(type: string, id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${id}/`);
  }

  searchItems(type: string, query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/?search=${query}`);
  }
}
