import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageInfoService } from './services/page-info.service';
import { ProductosService } from './services/productos.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {

  constructor(public pageInfo: PageInfoService,
              public productService: ProductosService ){

  }
}
