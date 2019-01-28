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

  constructor(private _location: Location,
    private annonceService: AnnounceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['annonceId'];
      this.annonceService.getAnnounceById(this.id).subscribe(data => {
        this.announce = data; console.log(this.announce);
        this.arrayForRating = new Array(Number(this.announce['note']));
        this.arrayForRatingEmpty = new Array(5 - Number(this.announce['note']));
      });
    });
    console.log(this.announce);
  }

  returnLastPage() {
    this._location.back();
  }

}
