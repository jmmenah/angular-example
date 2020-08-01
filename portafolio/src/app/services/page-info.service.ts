import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/pageInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  charged = false;

  constructor( private http: HttpClient) {

    // read JSON
    this.http.get('assets/data/data-page.json').subscribe( (resp: PageInfo) => {

      this.charged = true;
      this.info = resp;
      console.log(resp);

    });


   }
}
