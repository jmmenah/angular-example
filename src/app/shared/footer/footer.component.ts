import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class FooterComponent implements OnInit {

  anio : number = new Date().getFullYear();

  constructor( public pageInfoService: PageInfoService ) { }

  ngOnInit(): void {
  }

}
