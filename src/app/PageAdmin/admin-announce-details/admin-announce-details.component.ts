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

  constructor(private _location: Location, 
    private annonceService: AnnounceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['annonceId'];
      this.annonceService.getAnnounceById(this.id).subscribe(
        response => { this.announce = response; });
    });
    console.log(this.announce);
  }

  returnLastPage() {
    this._location.back();
  }

}
