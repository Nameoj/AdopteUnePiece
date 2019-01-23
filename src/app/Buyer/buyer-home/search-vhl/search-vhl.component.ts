import { Component, OnInit } from '@angular/core';
import { MotoTypeService } from 'src/app/Services/moto-type.service';
import { ResearchMoto } from '../../../models/researchMoto.models';
import { SearchService } from '../../../Services/search.service';

@Component({
  selector: 'app-search-vhl',
  templateUrl: './search-vhl.component.html',
  styleUrls: ['./search-vhl.component.css']
})
export class SearchVhlComponent implements OnInit {

choixMarque: boolean = false;
choixCylindree: boolean = false;
choixModele: boolean = false;

allMotos:any=[];
allMotosCylYear:any=[];
allMotosCylYearDetail;
allMotosB:any=[];
allMotosM:any=[];
allMotosC:any=[];
allMotosY:any=[];

newModel;
newBrand;
newCylindree;
newYear;
searchMoto:ResearchMoto;

  constructor(private motoTypeService: MotoTypeService, private searchService:SearchService) { }

  ngOnInit() {
    this.callJson();
  }

getMarque(){
  this.choixMarque = true;
}
getCylindree(){
  this.choixCylindree = true;
}

getModele(){
  this.choixModele = true;
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

onSelectBrand(brand){
  this.getMarque();
  this.newBrand = brand;
  this.allMotosM = [];
  this.allMotosCylYear;
  this.motoTypeService.getBrand(brand).subscribe( res => {
    this.allMotos = res;
  for( let i=0; i< Object.keys(res).length; i++){
    this.allMotosM.push(this.allMotos.motoModels[i].modelName)};
     });
    console.log(this.allMotos);
  }

onSelectModele(model){
  this.getModele();
  this.allMotosC = [];
  this.newModel=model;
  this.motoTypeService.getCylindree(model).subscribe ( res => {
    console.log(res);
    this.allMotosCylYearDetail = res;
    for( let i=0; i< Object.keys(res).length; i++){
      this.allMotosC.push(this.allMotosCylYearDetail[i].motoCylinder)};
      console.log(this.allMotosC);
  })

  }

  onSelectCylindree(cylindree){
    this.getCylindree();
    this.allMotosY = [];
    this.newCylindree=cylindree;
    for (let i=0; i<Object.keys(this.allMotosCylYearDetail).length; i++){
      this.allMotosY.push(this.allMotosCylYearDetail[i].motoYear);
      console.log(this.allMotosY);
    }
  }

  onSelectYear(year){
    this.newYear=year;
  }

  sendResearch(){
    console.log(this.newBrand, this.newModel, this.newCylindree, this. newYear);
    this.searchMoto=new ResearchMoto(this.newBrand, this.newModel, this.newCylindree, this.newYear);
    this.searchService.shareSearchVhlWithAnnounceList(this.searchMoto);
  }

}

