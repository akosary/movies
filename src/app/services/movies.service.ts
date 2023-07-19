import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiBaseURL = 'https://api.themoviedb.org/3';
  nestedURL = '/discover/movie';
  getByIdURL = '/movie/';
  private dataSubject = new BehaviorSubject<any>(null);
  public searchData$ = this.dataSubject.asObservable();
  constructor(private _http: HttpClient) {}

  getAll(page: number): Observable<any> {
    return this._http.get(`${this.apiBaseURL}${this.nestedURL}?page=${page}`);
  }

  getById(id: any): Observable<any> {
    return this._http.get(`${this.apiBaseURL}${this.getByIdURL}/${id}`);
  }

  search(query: any): Observable<any> {
    return this._http.get(`${this.apiBaseURL}/search/movie?query=${query}`);
  }

  setData(data: any): void {
    this.dataSubject.next(data);
  }
}
