import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  motoSearched;
  isSearchPerformed:boolean=false;
  shareSearchVhlWithAnnounceList(searchMoto){
    this.isSearchPerformed=true;
    this.motoSearched=searchMoto;
    return this.motoSearched;
  }
}
