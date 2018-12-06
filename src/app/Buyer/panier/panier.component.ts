import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {

  article: string;
  prix_unitaire: number;
  prix_ttc: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {article: 'Jante', prix_unitaire: 124, prix_ttc: 150},
  {article: 'Carter', prix_unitaire: 86, prix_ttc: 102},
  {article: 'Amortisseur', prix_unitaire: 150, prix_ttc: 178},
];

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  displayedColumns: string[] = ['article', 'prix_unitaire', 'prix_ttc','select'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  constructor() {}

  ngOnInit() {
   
  }

}
