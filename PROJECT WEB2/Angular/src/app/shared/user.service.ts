import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserDisplay } from './models/user-display.model';
import { Login } from './models/login.model';
import { Token } from './models/token.model';
import { Registration } from './models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  login(login:Login) :Observable<Token> {
    return this.http.post<Token>(environment.serverURL + '/api/users/login', login);
  }
  register(registration:Registration) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/users/registration', registration);
  }
  update(registration:Registration) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/users/update', registration);
  }

  update2(registration:Registration) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/users/update2', registration);
  }

  getUsers() : Observable<Registration[]> {
    return this.http.get<Registration[]>(environment.serverURL + '/api/users/all');
  }

  becomeDeliverer(registration:Registration) :Observable<String> {
    return this.http.post<String>(environment.serverURL + '/api/users/become', registration);
  }


  getUserByEmail(email:string) : Observable<Registration> {
    return this.http.get<Registration>(environment.serverURL + `/api/users/${email}`);
  }



  getUserByUsername(username:string) : Observable<UserDisplay> {
    return this.http.get<UserDisplay>(environment.serverURL + `/api/users/${username}`);
  }
}
