import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/models/buyer.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-buyer-list',
  templateUrl: './admin-buyer-list.component.html',
  styleUrls: ['./admin-buyer-list.component.css']
})
export class AdminBuyerListComponent implements OnInit {

  numbers: number[] = [];
  buyers: Buyer[];
  buyer: Buyer;

  constructor(private buyerService: BuyerService, private router: Router) { }

  ngOnInit() {
    this.buyerService.getAllBuyers().subscribe(
      response => this.buyers = response
    );
  }

  edit(buyer) {
    this.buyerService.getBuyerDetails(buyer)
      .subscribe(data => {
        this.buyerService.buyerConnected = data;
        this.router.navigate(['/myaccount/infosperso']);
      }
      );
  }

  delete(buyer) {
    this.buyerService.deleteBuyer(buyer)
      .subscribe(data => {
        this.buyerService.buyerConnected = data;
        this.buyerService.getAllBuyers().subscribe(
          response => this.buyers = response
        );
      });
  }

}
