import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { CommandesService } from 'src/app/Services/commandes.service';
import { Announce } from 'src/app/models/announce.models';

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

  constructor(private commandeService: CommandesService) {}

  commandes;
  ngOnInit() {
   ELEMENT_DATA=this.commandeService.commandes;
   console.log(ELEMENT_DATA)
   this.dataSource = new MatTableDataSource<Announce>(ELEMENT_DATA);
   this.sousTotaux();
   
  }

  sousTotaux () {
    for(let i=0; i<ELEMENT_DATA.length; i++){
      this.sousTotal += parseInt(ELEMENT_DATA[i].price, 10);
      this.port += ELEMENT_DATA[i].charge;
      this.total = this.sousTotal + this.port;
    }
  }
  displayedColumns: string[] = ['pieceName', 'price', 'charge','select', 'select2'];
  
  // selection = new SelectionModel<Announce>(true, []);

  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }
 

  


}
