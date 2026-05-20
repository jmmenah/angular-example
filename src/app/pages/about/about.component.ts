import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AboutComponent implements OnInit {

  constructor( public pageInfoService: PageInfoService) { }

  ngOnInit(): void {
  }

}
