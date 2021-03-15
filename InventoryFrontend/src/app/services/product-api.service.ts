import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/beans/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    let url = environment.api_url + '/products';
    return this.http.get<Product[]>(url);
  }

  addProduct(product: Product) {
    let url = environment.api_url + '/products';
    return this.http.post(url, product);

  }

  updateProduct(product: Product) {
    let url = environment.api_url + '/products';
    return this.http.put(url, product);

  }
}
