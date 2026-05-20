import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SearchComponent implements OnInit {

  products: Product[] = [];
  term = '';

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {

      this.term = params.term || '';

      const data = (window as any).portafolioData;
      const products: Product[] = data?.products || [];
      const normalizedTerm = this.term.toLocaleLowerCase();

      if (!normalizedTerm) {
        this.products = products;
        return;
      }

      this.products = products.filter( product => {
        const tituloLower = product.titulo.toLocaleLowerCase();
        return product.categoria.indexOf( normalizedTerm ) >= 0 || tituloLower.indexOf( normalizedTerm ) >= 0;
      } );

    } );

  }

}
