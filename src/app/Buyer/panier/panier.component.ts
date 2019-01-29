import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CommandesService } from 'src/app/Services/commandes.service';
import { Announce } from 'src/app/models/announce.models';
import { Location } from '@angular/common';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

export interface Announce {

  id: number;
  seller: string;
  image: string;
  description: string;
  note: string;
  postDate;
  pieceName: string;
  model: string;
  brand: string;
  cylinder: string;
  year: string;
  price: string;
  charge: number;

}

let ELEMENT_DATA: Announce[] = [
];

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private commandeService: CommandesService, private _location: Location, private annonceService: AnnounceService, private router: Router, private categoriesService: CategoriesService ) { }

  dataSource;
  sousTotal = 0;
  port = 0;
  total = 0;

  pieceName;
  brand;
  model;
  image;
  etat;
  year;
  description

  commandes;
  displayedColumns: string[] = ['pieceName', 'price', 'charge', 'select', 'select2'];
  ngOnInit() {
    this.initPage();    
  }

  returnLastPage() {
    this.categoriesService.piece = '';
    this.router.navigate(['/home']);
  }

  initPage() {
    ELEMENT_DATA = this.commandeService.commandes;
    console.log(ELEMENT_DATA);
    this.dataSource = new MatTableDataSource<Announce>(ELEMENT_DATA);
    this.sousTotaux();
  }

  sousTotaux() {
    if (ELEMENT_DATA.length == 0) {
      this.sousTotal = 0; this.total = 0; this.port = 0
    }
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      this.sousTotal += parseInt(ELEMENT_DATA[i].price, 10);
      this.port += ELEMENT_DATA[i].charge;
      this.total = this.sousTotal + this.port;
    }
  }

  delete(id, index) {
    console.log(index);
    console.log(id);
    this.commandeService.commandes.splice(index,1);
    this.commandeService.nbArticle --;
    this.initPage();
    this.annonceService.undeleteAnnonce(id).subscribe(data => console.log(data));
  }

  edit(i) {
    this.brand = ELEMENT_DATA[i].brand;
    this.model = ELEMENT_DATA[i].model;
    this.pieceName = ELEMENT_DATA[i].pieceName;
    this.image = ELEMENT_DATA[i].image;
    this.etat = ELEMENT_DATA[i].note;
    this.year = ELEMENT_DATA[i].year;
    this.description = ELEMENT_DATA[i].description;

  }
}
