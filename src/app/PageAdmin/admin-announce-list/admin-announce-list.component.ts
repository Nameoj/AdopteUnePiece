import { Component, OnInit, Input } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Announce } from 'src/app/models/announce.models';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-admin-announce-list',
  templateUrl: './admin-announce-list.component.html',
  styleUrls: ['./admin-announce-list.component.css']
})
export class AdminAnnounceListComponent implements OnInit {

  announces: Object; Announce;
  sellerEdit: Seller;
  username: String;
  idx;
  sellers;
  seller;
  listAnnonces;
  idefix;
  announce;

  constructor(private sellerService: SellerService,
    private announceService: AnnounceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sellers = this.sellerService.sellers;
    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.announceService.getSellerAnnounce(this.username).subscribe(
        response => { this.announces = response; });
      });
      this.seller = this.sellerService.getSeller(this.username)
      .subscribe(
          data => { this.seller = data; }
      );
  }

  details(annonceId) {
    console.log(annonceId);
    console.log('La route du Q' + this.router.navigate(['/announce-piece', annonceId]));
    this.router.navigate(['/announce-piece', annonceId]);
  }

  delete(id) {
    this.announceService.deleteAnnonce(id)
      .subscribe(data => {
        this.announceService.announceEdit = data;
        console.log(this.announceService.announceEdit);
        this.announceService.getSellerAnnounce(this.username).subscribe(
          response => this.announces = response
        );
      });
  }

}


