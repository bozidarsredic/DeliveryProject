import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Registration } from './registration.model';
import { Product } from './product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductSevice {

  constructor( private http: HttpClient) { }



  update(registration:Registration) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/users/update', registration);
  }

  getProducts() : Observable<Product[]> {

    return this.http.get<Product[]>(environment.serverURL + '/api/products/all');
  }

  addProduct(product:Product) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/products/addproduct', product);
  }


}
