import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CommandesService } from 'src/app/Services/commandes.service';
import { Announce } from 'src/app/models/announce.models';
import { Location } from '@angular/common';

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

  constructor(private commandeService: CommandesService, private _location: Location, ) { }

  dataSource;
  sousTotal = 0;
  port = 0;
  total = 0;

  commandes;
  displayedColumns: string[] = ['pieceName', 'price', 'charge', 'select', 'select2'];
  ngOnInit() {
    ELEMENT_DATA = this.commandeService.commandes;
    this.dataSource = new MatTableDataSource<Announce>(ELEMENT_DATA);
    this.sousTotaux();

  }

  returnLastPage() {
    this._location.back();
  }

  sousTotaux() {
    for (let i = 0; i < ELEMENT_DATA.length; i++) {
      this.sousTotal += parseInt(ELEMENT_DATA[i].price, 10);
      this.port += ELEMENT_DATA[i].charge;
      this.total = this.sousTotal + this.port;
    }
  }
}
