import { Injectable } from '@angular/core';
import { PageInfo } from '../interfaces/pageInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  charged = false;

  team: any[] = [];

  constructor() {

    this.loadInfo();
    this.loadTeam();


   }

  private loadInfo() {
    const data = (window as any).portafolioData;

    this.info = data.pageInfo as PageInfo;
    this.charged = true;
  }

  private loadTeam(){
    const data = (window as any).portafolioData;

    this.team = data.team || [];

  }
}
