import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer.models';


@Injectable({
  providedIn: 'root'
})

export class BuyerService {

  public buyerConnected

  private baseUrl = 'http://localhost:8080/api/buyers';

  constructor(private http: HttpClient) { }

  createBuyer(buyer: Object): Observable<Object> {
    console.log("creation compte");
    return this.http.post(`${this.baseUrl}`, buyer);
  };
  
}
