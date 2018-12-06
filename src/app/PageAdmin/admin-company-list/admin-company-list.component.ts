import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit() {
  }

}
