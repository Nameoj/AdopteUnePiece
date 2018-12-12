import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announce } from '../models/announce.models';

@Injectable({
  providedIn: 'root'
})
export class AnnounceService {

  public announceCreation

  private baseUrl = 'http://localhost:8080/api/announces';

  constructor(private http: HttpClient) { }

  createAnnounce(announce: Object): Observable<Object> {
    console.log("creation annonce");
    return this.http.post(`${this.baseUrl}`, announce);
  };
}
