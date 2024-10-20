import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  product: Product[] = [];
  productSearch: Product[] = [];

  constructor( private http: HttpClient) {

    this.loadProducts();


  }

  private loadProducts(): any{

    return new Promise<void>( ( resolve, reject ) => {

      this.http.get('https://angular-example-273fa.firebaseio.com/productos_idx.json').subscribe( (resp: Product[]) => {

        this.product = resp;
        this.loading = false;
        resolve();

      });

    });


  }

  getProduct(id: string): any{

    return this.http.get(`https://angular-example-273fa.firebaseio.com/productos/${ id }.json`);

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
