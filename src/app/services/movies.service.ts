import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiBaseURL = 'https://api.themoviedb.org/3';
  nestedURL = '/discover/movie';
  getByIdURL = '/movie/';

  constructor(private _http: HttpClient) {}

  getAll(page: number): Observable<any> {
    return this._http.get(`${this.apiBaseURL}${this.nestedURL}?page=${page}`);
  }

  getById(id: any): Observable<any> {
    return this._http.get(`${this.apiBaseURL}${this.getByIdURL}/${id}`);
  }
}
