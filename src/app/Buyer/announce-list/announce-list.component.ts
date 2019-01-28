import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce.models';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../Services/search.service';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-announce-list',
  templateUrl: './announce-list.component.html',
  styleUrls: ['./announce-list.component.css']
})
export class AnnounceListComponent implements OnInit {

  constructor(private announceService: AnnounceService, private route: ActivatedRoute, private searchService: SearchService,
    private categoriesService: CategoriesService) { }

  listAnnonces;
  listAnnoncesRecherche;
  piece;
  filterAnnounces;
  

  ngOnInit() {
    this.listAnnonces = [];
    this.route.params.subscribe((params: Params) => {
      this.piece = params['piece'];
      if (!this.announceService.listAnnonceRecherche) {
        this.getAnnonces();
      }
      else { this.getAnnoncesRecherche()}
    })
  }


  ngDoCheck(): void {
    if (this.searchService.isSearchPerformed === true) {
      this.filterAnnounces = this.searchService.motoSearched;
      this.searchService.isSearchPerformed = false;
      this.searchService.rechercheInitiale = true;
      console.log(this.filterAnnounces);
      this.categoriesService.piece='';
      console.log
      this.getAnnoncesRecherche();
      
      
    }
  }
  
  ngOnChanges(){
    this.filterAnnounces;
  }

  getAnnonces() {
    this.announceService.getAnnounces()
      .subscribe(
        data => { this.listAnnonces = data; this.announceService.listAnnonce = data; console.log(this.listAnnonces);  if(this.piece) {
          this.getAnnoncesFiltre();}
        });
  }

  getAnnoncesRecherche() {
    this.announceService.getAnnouncesByModelAndCylinderAndYear(this.searchService.motoSearched.model, this.searchService.motoSearched.cylindree, this.searchService.motoSearched.year)
    .subscribe(
      data => {this.announceService.listAnnonceRecherche = data; this.listAnnonces = this.announceService.listAnnonceRecherche; this.announceService.listAnnonce = [];
        if(this.piece && !this.searchService.rechercheInitiale) {
          this.getAnnoncesFiltre();}
        this.searchService.rechercheInitiale = false;
      })
  }

  getAnnoncesFiltre() {

    console.log(this.announceService.listAnnonce);
    console.log(this.announceService.listAnnonceRecherche);
    console.log(this.listAnnonces);

    const arrayLength = this.listAnnonces.length
    const newArray = [];
    console.log(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
      if (this.listAnnonces[i].pieceName == this.piece) {
        newArray.push(this.listAnnonces[i])
      }
    }
    this.listAnnonces = newArray;
  }
}
