import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {
      id: 1,
      name: 'ejemmplo',
      description: 'ejemplo',
      price: 0,
      stock: 0,
    },
    {
      id: 2,
      name: 'Corona',
      description: 'Con alcohol',
      price: 0,
      stock: 0,
    },
  ];
}
