/**----------------------------------------
 * | Para hacer las peticiones http
 * ----------------------------------------*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**----------------------------------------
 * | Accedemos a las variables de entorno
 * ----------------------------------------*/
import { environment } from 'src/environments/environment';

import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products/';
  }

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myAppUrl + this.myApiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.myAppUrl + this.myApiUrl + id);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveProduct(product: Product): Observable<void> {
    /**--------------------------------------------
     * | Este metodo recibe otro parametro(body)
     --------------------------------------------*/
    return this.http.post<void>(this.myAppUrl + this.myApiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(this.myAppUrl + this.myApiUrl + id, product);
  }
}
