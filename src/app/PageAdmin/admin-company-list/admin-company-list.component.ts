import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  numbers: number[] = [];
  sellers: Seller[];

  constructor(private sellerService: SellerService) {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit() {
    this.sellerService.getAllSellers().subscribe(
      response => {this.sellers = response}
    )
  }
}
