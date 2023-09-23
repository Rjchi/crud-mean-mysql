/**----------------------------------------------------------------
 * | Con router nos podemos mover de componente (ex:useNavigate)
 * | Y con ActivatedRoute tomamos los parametros de la URL
 * ----------------------------------------------------------------*/
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required]],
      stock: [null, [Validators.required]],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  addProduct() {
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };

    if (this.id !== 0) {
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(
          'Producto actualizado exitosamente',
          'Producto Actualizado'
        );
        this.router.navigate([`/`]);
      });
    } else {
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(
          'Producto agregado exitosamente',
          'Producto Agregado'
        );
        this.router.navigate([`/`]);
      });
    }
  }

  getProduct(id: number) {
    /**------------------------------------------------
     * | Obtenemos el producto de la base de datos
     * ------------------------------------------------*/
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.form.setValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
      });
    });
  }
}
