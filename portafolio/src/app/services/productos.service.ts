import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  product: Product[] = [];

  constructor( private http: HttpClient) { 

    this.loadProducts();


  }

  private loadProducts(){

    this.http.get('https://angular-example-273fa.firebaseio.com/productos_idx.json').subscribe( (resp: Product[]) => {

      this.product = resp;
      this.loading = false;

    });
  }
}
