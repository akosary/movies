import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2MxM2ZhMWEyYTAyMzY0NjYxNjEzZjM0YzRhMjgyOSIsInN1YiI6IjY0YjY5NDQ5Nzg1NzBlMDBlMzNjYWY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CqpXSz6UESfP6beRaTtxFMZpS2XKtTTO5QLH9lfrsH8',
  };
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: this.headers,
    });
    return next.handle(request);
  }
}
