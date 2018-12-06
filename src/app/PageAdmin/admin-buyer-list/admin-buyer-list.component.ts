import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-buyer-list',
  templateUrl: './admin-buyer-list.component.html',
  styleUrls: ['./admin-buyer-list.component.css']
})
export class AdminBuyerListComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit() {
  }

}
