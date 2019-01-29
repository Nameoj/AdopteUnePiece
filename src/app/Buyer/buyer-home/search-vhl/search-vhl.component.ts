import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MotoTypeService } from 'src/app/Services/moto-type.service';
import { ResearchMoto } from '../../../models/researchMoto.models';
import { SearchService } from '../../../Services/search.service';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-search-vhl',
  templateUrl: './search-vhl.component.html',
  styleUrls: ['./search-vhl.component.css']
})
export class SearchVhlComponent implements OnInit {

  choixMarque = false;
  choixCylindree = false;
  choixModele = false;

  allMotos: any = [];
  allMotosCylYear: any = [];
  allMotosCylYearDetail;
  allMotosB: any = [];
  allMotosM: any = [];
  allMotosC: any = [];
  allMotosY: any = [];

  newModel;
  newBrand;
  newCylindree;
  newYear;
  searchMoto: ResearchMoto;

  vehicleChoiced: string;

  @Output() vehicleChoice = new EventEmitter<string>();

  constructor(private motoTypeService: MotoTypeService, private searchService: SearchService,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.callJson();
  }

  getMarque() {
    this.choixMarque = true;
  }
  getCylindree() {
    this.choixCylindree = true;
  }

  getModele() {
    this.choixModele = true;
  }

  callJson() {
    this.allMotos = this.motoTypeService.getAll().subscribe(res => {
      this.allMotosB = [];
      this.allMotos = res;
      for (let i = 0; i < Object.keys(this.allMotos).length; i++) {
        this.allMotosB.push(this.allMotos[i].name);
      }
    });
  }

  onSelectBrand(brand) {
    this.getMarque();
    this.newBrand = brand;
    this.allMotosM = [];
    // tslint:disable-next-line:no-unused-expression
    this.allMotosCylYear;
    this.motoTypeService.getBrand(brand).subscribe(res => {
      this.allMotos = res;
      for (let i = 0; i < Object.keys(this.allMotos.motoModels).length; i++) {
        this.allMotosM.push(this.allMotos.motoModels[i].modelName);
      }
    });
    console.log(this.allMotos);
    this.vehicleChoiced = this.newBrand;
    this.vehicleChoice.emit(this.vehicleChoiced);
  }

  onSelectModele(model) {
    this.getModele();
    this.allMotosC = [];
    this.newModel = model;
    this.motoTypeService.getCylindree(model).subscribe(res => {
      console.log(res);
      this.allMotosCylYearDetail = res;
      for (let i = 0; i < Object.keys(res).length; i++) {
        this.allMotosC.push(this.allMotosCylYearDetail[i].motoCylinder);
      }
      console.log(this.allMotosC);
      this.vehicleChoiced = this.newBrand + ' ' + this.newModel;
      this.vehicleChoice.emit(this.vehicleChoiced);
    });

  }

  onSelectCylindree(cylindree) {
    this.getCylindree();
    this.allMotosY = [];
    this.newCylindree = cylindree;
    for (let i = 0; i < Object.keys(this.allMotosCylYearDetail).length; i++) {
      this.allMotosY.push(this.allMotosCylYearDetail[i].motoYear);
      this.vehicleChoiced = this.newBrand + ' ' + this.newModel + ' ' + this.newCylindree + 'cc';
      this.vehicleChoice.emit(this.vehicleChoiced);
      console.log(this.allMotosY);
    }
  }

  onSelectYear(year) {
    this.newYear = year;
    this.vehicleChoiced = this.newBrand + ' ' + this.newModel + ' ' + this.newCylindree + 'cc ' + this.newYear;
    this.vehicleChoice.emit(this.vehicleChoiced);
  }

  sendResearch() {
    console.log(this.newBrand, this.newModel, this.newCylindree, this.newYear);
    if ((this.newBrand === undefined) || (this.newBrand === 'Marque') || (this.newBrand === 0)) {
      this.newBrand = '';
    }
    if ((this.newModel === undefined) || (this.newModel === 'Modèle') || (this.newModel === 0)) {
      this.newModel = '';
    }
    if ((this.newCylindree === undefined) || (this.newCylindree === 'Cylindrée') || (this.newCylindree === 0)) {
      this.newCylindree = '';
    }
    if ((this.newYear === undefined) || (this.newYear === 'Année')) {
      this.newYear = '';
    }
    this.vehicleChoiced = this.newBrand + ' ' + this.newModel + ' ' + this.newYear;
    this.searchMoto = new ResearchMoto(this.newBrand, this.newModel, this.newCylindree, this.newYear);

    this.categoriesService.piece = undefined;

    this.searchService.shareSearchVhlWithAnnounceList(this.searchMoto);

    this.vehicleChoice.emit(this.vehicleChoiced);
  }
}

