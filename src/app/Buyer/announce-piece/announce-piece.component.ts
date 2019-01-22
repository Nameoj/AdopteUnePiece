import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Location } from '@angular/common';
import { CommandesService } from 'src/app/Services/commandes.service';

@Component({
  selector: 'app-announce-piece',
  templateUrl: './announce-piece.component.html',
  styleUrls: ['./announce-piece.component.css']
})
export class AnnouncePieceComponent implements OnInit {

  id
  annonce: any[] =[];
  
  constructor(private annonceService: AnnounceService, private route: ActivatedRoute, private router : Router, private _location: Location, private commandeService: CommandesService) { }

  placeholderForDBAnnounce = {
    }
  
  arrayForRating;
  arrayForRatingEmpty;


  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.id = params['Id'];
      console.log(this.id);
      this.annonce = this.annonceService.listAnnonce[this.id];
      this.arrayForRating=new Array(Number(this.annonce['note']));
      this.arrayForRatingEmpty=new Array(5-Number(this.annonce['note']));
      
      console.log(this.annonce)
  });
  }

  returnLastPage() {
    this._location.back();
  }

  ajoutPanier() {
    this.commandeService.nbArticle ++;
    console.log(this.annonce['id']);
    console.log(this.annonce);
    this.annonceService.deleteAnnonce(this.annonce['id']).subscribe(data =>{
       this.commandeService.commandes.push(this.annonce);
       console.log(this.annonce);
       console.log(this.commandeService.commandes); 
       this.returnLastPage()
      })

  }

}
