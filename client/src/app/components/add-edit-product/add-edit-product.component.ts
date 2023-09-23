/**----------------------------------------------------------------
 * | Con router nos podemos mover de componente (ex:useNavigate)
 * ----------------------------------------------------------------*/
import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [null, [Validators.required]],
      stock: [null, [Validators.required]],
    });
  }

  addProduct() {
    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };

    this._productService.saveProduct(product).subscribe(() => {
      this.toastr.success(
        'Producto agregado exitosamente',
        'Producto Agregado'
      );
      this.router.navigate([`/`]);
    });
  }
}
