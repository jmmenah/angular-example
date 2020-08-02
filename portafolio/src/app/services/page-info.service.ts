import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/pageInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  charged = false;

  team: any[] = [];

  constructor( private http: HttpClient) {

    this.loadInfo();
    this.loadTeam();


   }

  private loadInfo() {

    this.http.get('assets/data/data-page.json').subscribe( (resp: PageInfo) => {

      this.charged = true;
      this.info = resp;

    });
  }

  private loadTeam(){
    this.http.get('https://angular-example-273fa.firebaseio.com/equipo.json').subscribe( (resp: any) => {

      this.team = resp;

    });

  }
}
