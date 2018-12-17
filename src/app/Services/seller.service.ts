import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller.models';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  public sellerConnected;

  private baseUrl = 'http://localhost:8080/api/sellers';

  constructor(private http: HttpClient) { }

  createSeller(seller: Object): Observable<Object> {
    console.log("creation compte");
    return this.http.post(`${this.baseUrl}`, seller);
  };
}
