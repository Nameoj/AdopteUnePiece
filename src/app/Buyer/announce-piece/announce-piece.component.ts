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

  pieceName: String = '';
  model: String = '';
  cylinder: String = '';
  brand: String = '';
  image: String = '';
  description:  String = '';
  price: String = '';
  year: String = '';


  ngOnInit() {

    this.role = this.buyerService.getAuthenticatedRole();

    this.route.params.subscribe((params: Params) => {
      this.id = params['Id'];
      this.annonceService.getAnnounceById(this.id)
        .subscribe(data => {
          this.annonce = data;
          this.arrayForRating = new Array(Number(this.annonce['note']));
          this.arrayForRatingEmpty = new Array(5 - Number(this.annonce['note']));
          this.pieceName = this.annonce.pieceName;
          this.model = this.annonce.model;
          this.brand = this.annonce.brand;
          this.cylinder = this.annonce.cylinder;
          this.image = this.annonce.image;
          this.description = this.annonce.description;
          this.price = this.annonce.price;
          this.year = this.annonce.year;
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
      this.router.navigate(['/panier']); } ) ; }
}
