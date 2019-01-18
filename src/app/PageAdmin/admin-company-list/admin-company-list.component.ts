import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  sellers: Seller[];

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit() {
    this.sellerService.getAllSellers().subscribe(
      response => {
      this.sellers = response;
        this.sellerService.sellers = this.sellers;
      },
    );
  }

  edit(seller) {
    console.log('displaying seller from admin-company-list: ' + seller);
    this.sellerService.sellerEdit = seller;
    this.router.navigate(['/admin-home/admin-company-edit']);
  }

  delete(seller) {
    this.sellerService.deleteSeller(seller)
      .subscribe(data => {
        this.sellerService.sellerEdit = data;
        console.log(this.sellerService.sellerEdit);
        this.sellerService.getAllSellers().subscribe(
          response => this.sellers = response
        );
      });
  }

  seeAnounces(username, idx) {
    console.log(idx);
    console.log('See announces of this seller');
    this.router.navigate(['/admin-home/admin-announce-list', username, idx]);
  }
}
