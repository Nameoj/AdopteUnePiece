import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-announce-details',
  templateUrl: './admin-announce-details.component.html',
  styleUrls: ['./admin-announce-details.component.css']
})
export class AdminAnnounceDetailsComponent implements OnInit {

  id;
  announce;
  arrayForRating;
  arrayForRatingEmpty;
  
  pieceName: String = '';
  brand: String = '';
  model: String = '';
  cylinder: String = '';
  image: String = '';
  description: String = '';
  price: String = '';

  constructor(private _location: Location,
    private annonceService: AnnounceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['annonceId'];
      this.annonceService.getAnnounceById(this.id).subscribe(data => {
        this.announce = data;
        this.arrayForRating = new Array(Number(this.announce['note']));
        this.arrayForRatingEmpty = new Array(5 - Number(this.announce['note']));

        this.pieceName = this.announce.pieceName;
        this.brand = this.announce.brand;
        this.model = this.announce.model;
        this.cylinder = this.announce.cylinder;
        this.image = this.announce.image;
        this.description = this.announce.description;
        this.price = this.announce.price;
      });
    });
  }

  returnLastPage() {
    this._location.back();
  }

}
