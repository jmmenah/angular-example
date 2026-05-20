import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PortafolioComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    const data = (window as any).portafolioData;
    this.products = data?.products || [];
  }

}
