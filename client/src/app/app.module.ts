import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**---------------------------------------------------------
 * | Estos modulos son para la animacion de un mensaje
 * ---------------------------------------------------------*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';

/**------------------------------
 * | Formularios reactivos
 * ------------------------------*/
import { ReactiveFormsModule } from '@angular/forms';

/**--------------------------------------------
 * | Esto es para hacer las peticiones HTTP
 * --------------------------------------------*/
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent,
  ],
  /**---------------------------------------------------------
   * | Agregamos el modulo para hacer las peticiones HTTP
   * -------------------------------------------------------*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
