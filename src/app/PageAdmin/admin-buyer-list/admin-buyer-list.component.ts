import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/models/buyer.models';

@Component({
  selector: 'app-admin-buyer-list',
  templateUrl: './admin-buyer-list.component.html',
  styleUrls: ['./admin-buyer-list.component.css']
})
export class AdminBuyerListComponent implements OnInit {

  numbers: number[] = [];
  buyers: Buyer[];

  constructor(private buyerService: BuyerService) {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit() {
    this.buyerService.getAllBuyers().subscribe(
      response => {this.buyers = response}
    );
  }

}
