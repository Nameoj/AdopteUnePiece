import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  sellers: Seller[];
  sellersObservable = new BehaviorSubject(this.sellers);

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

  indexTrackFn = (index: number) => index;
  nameTrackFn = (_: number, item: Seller) => item.ville;

  sortBy(prop: 'raisonSociale' | 'ville') {
    this.sellersObservable.next(this.sellers.map(s => ({ ...s })).sort((a, b) => {
      const aProp = a[prop], bProp = b[prop];
      if (aProp < bProp) {
        return -1;
      } else if (aProp > bProp) {
        return 1;
      }
      return 0;
    }));
  }
}
