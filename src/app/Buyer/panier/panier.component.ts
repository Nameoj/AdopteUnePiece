import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { CommandesService } from 'src/app/Services/commandes.service';
import { Announce } from 'src/app/models/announce.models';
import { Location } from '@angular/common';

export interface Announce {

  id: number,
  seller: string,
  image: string,
  description: string,
  note: string,
   postDate,
   pieceName: string,
   model: string,
   brand: string,
  cylinder: string,
   year: string,
   price: string,
   charge: number,
  
}

let ELEMENT_DATA: Announce[] = [
];

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  dataSource;
  sousTotal: number = 0;
  port: number = 0;
  total: number = 0;

  constructor(private commandeService: CommandesService, private _location: Location,) {}

  commandes;
  ngOnInit() {
   ELEMENT_DATA=this.commandeService.commandes;
   console.log(ELEMENT_DATA)
   this.dataSource = new MatTableDataSource<Announce>(ELEMENT_DATA);
   this.sousTotaux();
   
  }

  returnLastPage() {
    this._location.back();
  }

  sousTotaux () {
    for(let i=0; i<ELEMENT_DATA.length; i++){
      this.sousTotal += parseInt(ELEMENT_DATA[i].price, 10);
      this.port += ELEMENT_DATA[i].charge;
      this.total = this.sousTotal + this.port;
    }
  }
  displayedColumns: string[] = ['pieceName', 'price', 'charge','select', 'select2'];
  
 

  


}
