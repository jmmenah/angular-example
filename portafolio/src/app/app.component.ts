import { Component } from '@angular/core';
import { PageInfoService } from './services/page-info.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public pageInfo: PageInfoService,
              public productService: ProductosService ){

  }
}
