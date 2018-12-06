import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(httpClient: HttpClient) { }
}
