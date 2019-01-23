import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  motoSearched;
  shareSearchVhlWithAnnounceList(searchMoto){
    this.motoSearched=searchMoto;
    return this.motoSearched;
  }
}
