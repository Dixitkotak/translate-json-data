import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getTranslation(id: string, lg: string): Observable<any> {
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lg}&dt=t&q=${id}`;
    return this.http.get(url);
  }
}
