import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductMovement } from 'src/beans/ProductMovement';

@Injectable({
  providedIn: 'root'
})
export class ProductMovementAPIService {

  constructor(private http: HttpClient) {
  }

  getProductMovements(): Observable<ProductMovement[]> {
    let url = environment.api_url + '/movements';
    return this.http.get<ProductMovement[]>(url);
  }

  addProductMovement(productMovement: ProductMovement) {
    let url = environment.api_url + '/movements';
    return this.http.post(url, productMovement);

  }

  updateProductMovement(productMovement: ProductMovement) {
    let url = environment.api_url + '/movements';
    return this.http.put(url, productMovement);

  }

  getProdusctReportByLocation() {
    let url = environment.api_url + '/report';
    return this.http.get<ProductMovement[]>(url);
  }

}
