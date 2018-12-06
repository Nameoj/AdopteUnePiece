import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecherchePlaqueService {

  public url: string;

  constructor(private http: HttpClient) {}

  getPlaqueInfo(plaque): Observable<any> {
    this.url = "https://tesla.oscaro.com/xhr/dionysos-search/fr/fr?plate="+plaque;
    return this.http.get(this.url)
  }
}
