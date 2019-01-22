import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor() { }

  nbArticle=0;
  commandes:any[] =[];
}
