import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Registration } from './registration.model';
import { Product } from './product.model';
import { Order } from './order.model';




@Injectable({
  providedIn: 'root'
})
export class OrderSevice {

  constructor( private http: HttpClient) { }





  getOrders() : Observable<Order[]> {

    return this.http.get<Order[]>(environment.serverURL + '/api/orders/all');
  }

  addOrder(registration:Order) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/orders/addorder', registration);
  }

  updateOrder(registration:Order) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/orders/updateorder', registration);
  }

  lonLat(address: string) {
    return this.http.get('https://api.geoapify.com/v1/geocode/search?text=' + address + '&apiKey=39147befa79a470f90a3d04fe3d181ea');
  }

}
