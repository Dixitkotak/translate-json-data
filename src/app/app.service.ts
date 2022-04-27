import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getTranslation(id: string, lg: string): Observable<any> {
    //Write code calling service to obtain food fact data
    //https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=${id} spenish
    //https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=et&dt=t&q=${id} Estonian
    //https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=hu&dt=t&q=${id} hugarian
    //https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ru&dt=t&q=${id} Russ.
    let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lg}&dt=t&q=${id}`;
    return this.http.get(url);
  }
}
