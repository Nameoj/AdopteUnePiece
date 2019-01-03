import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer.models';
import {map} from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})

export class BuyerService {

  public buyerConnected
 
  
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  createBuyer(buyer: Object): Observable<Object> {
    console.log("creation compte");
    return this.http.post<any>(`${this.baseUrl}signup`, buyer)
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, data.username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          console.log("token enregistré" + data.accessToken +" "+ data.username)
          return data;
        }
      )
    );;
  };

  login(buyer: Object): Observable<Object> {
    console.log("signin process....");
    return this.http.post<any>(`${this.baseUrl}signin`, buyer)
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, data.username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          console.log("token enregistré" + data.accessToken +" "+ data.username)
          return data;
        }
      )
    );;
  };

  getBuyerDetails(username): Observable<Object> {
    console.log("buyer details retreiving");
    return this.http.get<Buyer>(`${this.baseUrl}buyer/${username}`)
    
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  updateBuyer(buyer, username): Observable<Object> {
    console.log("creation compte");
    return this.http.put(`${this.baseUrl}buyer/${username}`, buyer);
  };
  
}
