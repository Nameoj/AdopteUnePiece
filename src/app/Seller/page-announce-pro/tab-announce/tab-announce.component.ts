import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';
import { AnnounceService } from 'src/app/Services/announce.service';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-tab-announce',
  templateUrl: './tab-announce.component.html',
  styleUrls: ['./tab-announce.component.css']
})

export class TabAnnounceComponent implements OnInit {

  username: String;
  listAnnonces;
  announces: Object; Announce;

  constructor(private sellerService: SellerService, private announceService: AnnounceService, private buyerService: BuyerService) { }

  ngOnInit() {
    this.username = this.buyerService.getAuthenticatedUser();
    this.announceService.getSellerAnnounce(this.username)
      .subscribe(
        data => {
          this.listAnnonces = data; this.announceService.listAnnonce = data;
          this.announceService.getSellerAnnounce(this.username).subscribe(
            response => { this.announces = response; });
        }
      );
  }

  delete(id) {
    if (confirm(`Etes-vous sûr de vouloir supprimer cette annonce ?`)) {
      this.announceService.deleteAnnonce(id)
        .subscribe(data => {
          this.announceService.announceEdit = data;
          this.announceService.getSellerAnnounce(this.username);
          this.announceService.getSellerAnnounce(this.username).subscribe(
            response => this.listAnnonces = response
          );
        });
    } else { }
  }
}
