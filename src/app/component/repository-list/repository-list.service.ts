import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryListService {

  constructor(
    private http: HttpClient
  ) { }

  public getList(payload) {

    if (!payload) {
      payload = 'all'
    }

    return this.http.get<any>('https://api.github.com/search/repositories?per_page=10&q='+payload).pipe(
      map(result => {
        return result
      })
    )

  }

}
