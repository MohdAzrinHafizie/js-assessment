import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryListService {

  constructor(
    private http: HttpClient
  ) { }

  public getList(payload) {

    if (!payload.query) {
      payload.query = 'all';
    }

    return this.http.get<any>('https://api.github.com/search/repositories?page=' + payload.page + '&per_page=10&q=' + payload.query).pipe(
      map(result => {
        return result;
      }),
      catchError(err => {
        return throwError(err);
      })
    );

  }

}
