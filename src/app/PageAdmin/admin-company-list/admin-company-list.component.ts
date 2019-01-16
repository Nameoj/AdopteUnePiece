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

  numbers: number[] = [];
  sellers: Seller[];

  constructor(private sellerService: SellerService, private router: Router) {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit() {
    this.sellerService.getAllSellers().subscribe(
      response => { this.sellers = response; }
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
}
