import { Component, OnInit } from '@angular/core';

/**-----------------------
 * | Para las animaciones
 -----------------------*/
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];

  /**------------------------------------------------------------
   * | Los servicios generalmente empiezan con guion_bajo ___
   * ------------------------------------------------------------*/
  constructor(
    private _productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
    });
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe(() => {
      /**--------------------------------------
       * | Volvemos a cargar los productos
       * --------------------------------------*/
      this.getListProducts();
      this.toastr.warning('Producto eliminado con exito', 'Producto Eliminado');
    });
  }
}
