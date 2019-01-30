import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoTypeService {

  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:8080/api';

  private brandUrl = '/brand';
  private modelUrl = '/model';
  private modelInfoUrl = '/modelinfo';

  private getAllUrl = '/get/all';
  private getUrl = '/get/';
  private postUrl = '/post/';

  vehicleChoiced = 'Votre Moto';


  getAll() {
    return this.http.get(`${this.baseUrl}` + `${this.brandUrl}` + `${this.getAllUrl}`);
  }

  getCylindree(model) {
    return this.http.get(`${this.baseUrl}` + `${this.modelInfoUrl}` + `${this.getUrl}${model}`);
  }

  getBrand(brand) {
    return this.http.get(`${this.baseUrl}` + `${this.brandUrl}` + `${this.getUrl}${brand}`);
  }

  createBrand(name) {
    return this.http.post(`${this.baseUrl}` + `${this.brandUrl}` + `${this.postUrl}`, name);
  }
  createModel(motoModel) {
    return this.http.post(`${this.baseUrl}` + `${this.modelUrl}` + `${this.postUrl}`, motoModel);
  }
  createCylinderYear(motoModelInfo) {
    return this.http.post(`${this.baseUrl}` + `${this.modelInfoUrl}` + `${this.postUrl}`, motoModelInfo);
  }



}
