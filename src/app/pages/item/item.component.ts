import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FullProduct } from '../../interfaces/full-product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ItemComponent implements OnInit {

  product: FullProduct | null = null;
  id = '';

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const parameters = this.route.snapshot.params;
    const data = (window as any).portafolioData;

    this.id = parameters.id;
    this.product = data?.fullProducts?.[parameters.id] || null;
  }

}
