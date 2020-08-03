import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FullProduct } from '../../interfaces/full-product.interface';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: FullProduct;
  id: string;

  constructor( private route: ActivatedRoute,
               public productService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parameters => {

      // console.log(parameters['id']);
      this.productService.getProduct(parameters.id).subscribe( (product: FullProduct) => {

        this.id = parameters.id;
        this.product = product;

       } );

    } );
  }

}
