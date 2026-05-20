import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { FullProduct } from '../interfaces/full-product.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  product: Product[] = [];
  productSearch: Product[] = [];

  constructor() {

    this.loadProducts();


  }

  private loadProducts(): any{

    return new Promise<void>( ( resolve, reject ) => {

      const data = (window as any).portafolioData;

      this.product = data.products as Product[];
      this.loading = false;
      resolve();

    });


  }

  getProduct(id: string): any{

    const data = (window as any).portafolioData;

    return of(data.fullProducts[id] as FullProduct);

  }

  searchProduct( term: string ): any{

    if (this.product.length === 0 ){

      this.loadProducts().then( () => {

        this.filterProducts( term );

      });

    } else {

      this.filterProducts(term);

    }


  }


  private filterProducts( term: string ): any{

    console.log(this.product);
    this.productSearch = [];

    term = term.toLocaleLowerCase();

    this.product.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( term ) >= 0 || tituloLower.indexOf( term ) >= 0){

        this.productSearch.push( prod );

      }

    });

  }

}
