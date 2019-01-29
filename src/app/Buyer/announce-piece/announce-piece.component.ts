import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Location } from '@angular/common';
import { CommandesService } from 'src/app/Services/commandes.service';
import { BuyerService } from 'src/app/Services/buyer.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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
      console.log(this.id);
      this.annonceService.getAnnounceById(this.id)
        .subscribe(data => {
          this.annonce = data; console.log(this.annonce);
          this.arrayForRating = new Array(Number(this.annonce['note']));
          this.arrayForRatingEmpty = new Array(5 - Number(this.annonce['note']));

          console.log(this.annonce);
          console.log(this.role);
        });
    });
  }

  returnLastPage() {
    this._location.back();
  }

  ajoutPanier() {
    this.commandeService.nbArticle++;
    console.log(this.annonce['id']);
    console.log(this.annonce);
    this.annonceService.deleteAnnonce(this.annonce['id']).subscribe(data => {
      this.commandeService.commandes.push(this.annonce);
      console.log(this.annonce);
      console.log(this.commandeService.commandes);

      this.returnLastPage();
    });

  }

}
