import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Announce } from 'src/app/models/announce.models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-announce-list',
  templateUrl: './admin-announce-list.component.html',
  styleUrls: ['./admin-announce-list.component.css']
})
export class AdminAnnounceListComponent implements OnInit {

  announces: Object; Announce;
  sellerEdit: Seller;

  constructor(private sellerService: SellerService, private announceService: AnnounceService, private router: Router) {}

  ngOnInit() {
    this.sellerEdit = this.sellerService.sellerEdit;
    this.announceService.getSellerAnnounce(this.sellerEdit).subscribe (
      response => { this.announces = response; }
    );
  }

}
