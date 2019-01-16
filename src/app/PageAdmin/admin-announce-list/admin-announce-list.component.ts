import { Component, OnInit } from '@angular/core';
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
  raisonSociale: String;
  username: String;
  idx;
  sellers;
  seller;

  constructor(private sellerService: SellerService,
    private announceService: AnnounceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sellers = this.sellerService.sellers;
    console.log(this.sellerEdit);
    this.route.params.subscribe((params: Params) => {
      this.username = params['username'];
      this.idx = params['idx'];
      this.seller = this.sellers[this.idx];
      this.announceService.getSellerAnnounce(this.username).subscribe(
        response => { this.announces = response; });
    });
  }

}
