import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-vhl',
  templateUrl: './search-vhl.component.html',
  styleUrls: ['./search-vhl.component.css']
})
export class SearchVhlComponent implements OnInit {

choixMarque: boolean = false;
choixCylindree: boolean = false;
choixModele: boolean = false;

  constructor() { }

  ngOnInit() {
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

}
