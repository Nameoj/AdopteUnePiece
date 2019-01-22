import { Component, OnInit } from '@angular/core';
import { MotoTypeService } from '../../Services/moto-type.service';
import { Brand } from '../../models/brand.models';
import { Model } from '../../models/model.models';
import { CylinderYear } from '../../models/cylinderYear.models';

@Component({
  selector: 'app-data-base-managment',
  templateUrl: './data-base-managment.component.html',
  styleUrls: ['./data-base-managment.component.css']
})
export class DataBaseManagmentComponent implements OnInit {

  constructor(private motoTypeService: MotoTypeService) { }

  allMotos:any=[];
  allMotosB:any=[];
  allMotosM:any=[];

  newBrand:String;

  newModel_brand:String;
  newModel:String;
  
  newCylinder:String;
  newYear:String;
  newCylinderYear_model;
  newCylinderYear_brand;
  
  addBrand = false;
  addModel = false;
  addCylinderYear = false;
  modelSelect:boolean=false;

  idx;
  getIndex(idx){
    console.log(idx)
    this.idx=idx
    return this.idx;
  }

  openBrandCreator() {
    if (this.addBrand == true)
      return this.addBrand = false;
    else {
      this.callJson();
      this.newModel="";
      this.newCylinder="";
      this.newYear="";
      this.addModel = false;
      this.addCylinderYear = false;
      return this.addBrand = true;
    }
  }
  openModelCreator() {
    if (this.addModel == true)
      return this.addModel = false;
    else {
      this.callJson();
      this.newBrand="";
      this.newCylinder="";
      this.newYear="";
      this.addBrand = false;
      this.addCylinderYear = false;
      return this.addModel = true;
    }
  }
  openCylinderYearCreator() {
    if (this.addCylinderYear == true)
      return this.addCylinderYear = false;
    else {
      this.callJson();
      this.addBrand=false;
      this.addModel=false;
      this.newModel="";
      this.newBrand="";
      return this.addCylinderYear = true;
    }
  }


  addToDatabase(){
    switch(this.newBrand!="" || this.newModel!="" || this.newCylinder!=""){
      
      case this.newBrand!="":
      const addBrand=new Brand(this.newBrand);
      this.motoTypeService.createBrand(addBrand).subscribe(res =>
        {
            console.log("front:marque créée: "+ addBrand.name);
        })
      break;
      case this.newModel!="":
      const addModel=new Model(this.newModel_brand, this.newModel);
      console.log("front:modèle créée:"+ addModel.modelName + " de marque: " + addModel.motoBrand)
      this.motoTypeService.createModel(addModel).subscribe(res => {
        console.log("front:modèle créée:"+ addModel.modelName + " de marque: " + addModel.motoBrand)
      })
      break;
      case this.newCylinder!="":
        const addCylinderYear=new CylinderYear(this.newCylinderYear_model, this.newCylinder, this.newYear);
        this.motoTypeService.createCylinderYear(addCylinderYear).subscribe(res => {
          console.log("front: cylindre-année créée: " + addCylinderYear.motoCylinder + "-" + addCylinderYear.motoYear + ", pour le modèle: " + addCylinderYear.motoModel)
        })
      break;
    }
  }

  onSelectBrand(brand){
    this.newCylinderYear_brand = brand;
    this.allMotosM = [];
    this.motoTypeService.getBrand(brand).subscribe( res => {
      this.allMotos = res;
    for( let i=0; i< Object.keys(res).length; i++){
      this.allMotosM.push(this.allMotos.motoModels[i].modelName)};
       });
    }

  callJson(){
    this.allMotos=this.motoTypeService.getAll().subscribe( res =>
      {
        this.allMotosB = [];
        this.allMotos=res;
        for( let i=0; i< Object.keys(this.allMotos).length; i++){
          this.allMotosB.push(this.allMotos[i].name)
        }
      });
  }
  ngOnInit() {
    this.callJson();
  }

}
