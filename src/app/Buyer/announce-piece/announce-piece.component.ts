import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Location } from '@angular/common';
import { CommandesService } from 'src/app/Services/commandes.service';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-announce-piece',
  templateUrl: './announce-piece.component.html',
  styleUrls: ['./announce-piece.component.css']
})
export class AnnouncePieceComponent implements OnInit {

  id;
  annonce;

  constructor(private annonceService: AnnounceService, private route: ActivatedRoute,
    private router: Router, private _location: Location,
    private commandeService: CommandesService, private buyerService: BuyerService) { }

  placeholderForDBAnnounce = {
  };

  arrayForRating;
  arrayForRatingEmpty;
  role;


  ngOnInit() {

    this.role = this.buyerService.getAuthenticatedRole();

    this.route.params.subscribe((params: Params) => {
      this.id = params['Id'];
      this.annonceService.getAnnounceById(this.id)
        .subscribe(data => {
          this.annonce = data;
          this.arrayForRating = new Array(Number(this.annonce['note']));
          this.arrayForRatingEmpty = new Array(5 - Number(this.annonce['note']));
        });
    });
  }

  returnLastPage() {
    this._location.back();
  }

  ajoutPanier() {
    this.commandeService.nbArticle++;
    this.annonceService.deleteAnnonce(this.annonce['id']).subscribe(data => {
      this.commandeService.commandes.push(this.annonce);

      this.returnLastPage();
    });
  }

}
