import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller.models';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  public sellerConnected;
  public sellerEdit;
  public sellers;

  private baseUrl = 'http://localhost:8080/api/signup/seller';
  private baseUrl2 = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createSeller(seller: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, seller);
  }

  getAllSellers() {
    return this.http.get<Seller[]>(`${this.baseUrl2}/sellers`);
  }

  getSeller(username) {
    return this.http.get(`${this.baseUrl2}/seller/${username}`);
  }

  updateSeller(seller, username): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/update/${username}`, seller);
  }

  updateSellerMdp(seller, username): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/updatemdp/${username}`, seller);
  }

  deleteSeller(username: String): Observable<Object> {
    return this.http.get<Seller>(`${this.baseUrl2}/deleteseller/${username}`);
  }

}
