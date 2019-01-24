import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer.models';
import { map } from 'rxjs/operators';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'
export const ROLE = 'role'

@Injectable({
  providedIn: 'root'
})

export class BuyerService {

  public buyerConnected;

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllBuyers() {
    console.log('retreiving buyers');
    return this.http.get<Buyer[]>(`${this.baseUrl}buyers`);
  }

  createBuyer(buyer: Object): Observable<Object> {
    console.log('creation compte');
    return this.http.post<any>(`${this.baseUrl}signup`, buyer)
    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, data.username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          sessionStorage.setItem(ROLE, data.authorities[0].authority);
          console.log("token enregistré" + data.accessToken +" "+ data.username)
          return data;
        }
      )
    );
  };

  login(buyer: Object): Observable<Object> {
    console.log('signin process....');
    return this.http.post<any>(`${this.baseUrl}signin`, buyer)

    .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, data.username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.accessToken}`);
          sessionStorage.setItem(ROLE, data.authorities[0].authority);
          console.log("token enregistré" + data.accessToken +" "+ data.username)
          return data;
        }
      )
    );;
  };

  getBuyerDetails(username): Observable<Object> {
    console.log('buyer details retreiving');
    return this.http.get<Buyer>(`${this.baseUrl}buyer/${username}`);

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  getAuthenticatedRole() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(ROLE)
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN);
    sessionStorage.removeItem(ROLE)

  }

  updateBuyer(buyer, username): Observable<Object> {
    console.log('creation compte');
    return this.http.put(`${this.baseUrl}buyer/${username}`, buyer);
  }
  deleteBuyer(username: String): Observable<Object> {
    return this.http.get<Buyer>(`${this.baseUrl}deletebuyer/${username}`);
  }

}
