import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announce } from '../models/announce.models';
import { Seller } from '../models/seller.models';

@Injectable({
  providedIn: 'root'
})
export class AnnounceService {

  public announceCreation;
  public announceEdit;

  private baseUrl = 'http://localhost:8080/api/announces';

  constructor(private http: HttpClient) { }

  createAnnounce(announce: Object): Observable<Object> {
    console.log("creation annonce");
    return this.http.post<any>(`${this.baseUrl}/postAnnounce`, announce);
  };

  getAnnounces() {
    return this.http.get(`${this.baseUrl}`);
  }

  getSellerAnnounce(username): Observable<Object> {
    return this.http.get<Seller>(`${this.baseUrl}/seller/${username}` )
  }
}
