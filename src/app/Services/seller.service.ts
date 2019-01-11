import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller.models';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  public sellerConnected;

  private baseUrl = 'http://localhost:8080/api/signup/seller';
  private baseUrl2 = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  createSeller(seller: Object): Observable<Object> {
    console.log('creation compte seller');
    return this.http.post(`${this.baseUrl}`, seller);
  }

  getAllSellers() {
    console.log('retreiving sellers');
    return this.http.get<Seller[]>(`${this.baseUrl2}sellers`);
  }
}
