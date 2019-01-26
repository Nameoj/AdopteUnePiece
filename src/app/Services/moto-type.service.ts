import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoTypeService {

  constructor(private http:HttpClient) { }


  private baseUrl="http://localhost:8080/api";
  
  private brandUrl="/brand";
  private modelUrl="/model";
  private modelInfoUrl="/modelinfo"

  private getAllUrl="/get/all"
  private getUrl="/get/"
  private postUrl="/post/"

  vehicleChoiced: string = "Votre Moto";


  getAll(){
    return this.http.get(`${this.baseUrl}`+`${this.brandUrl}`+`${this.getAllUrl}`)
  }

  getCylindree(model){
    return this.http.get(`${this.baseUrl}`+`${this.modelInfoUrl}`+`${this.getUrl}${model}`)
  }

  getBrand(brand){
    return this.http.get(`${this.baseUrl}`+`${this.brandUrl}`+`${this.getUrl}${brand}`)
  }

  createBrand(name){
    console.log("nouvelle marque créée")
    return this.http.post(`${this.baseUrl}`+`${this.brandUrl}`+`${this.postUrl}`,name);
  }
  createModel(motoModel){
    console.log("nouveau modèle créé")
    return this.http.post(`${this.baseUrl}`+`${this.modelUrl}`+`${this.postUrl}`,motoModel);
  }
  createCylinderYear(motoModelInfo){
    console.log("nouveau cylindre-année créé")
    return this.http.post(`${this.baseUrl}`+`${this.modelInfoUrl}`+`${this.postUrl}`,motoModelInfo)
  }



}
