import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-announce-list',
  templateUrl: './admin-announce-list.component.html',
  styleUrls: ['./admin-announce-list.component.css']
})
export class AdminAnnounceListComponent implements OnInit {

  numbers: number[] = [];

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

  ngOnInit() {
  }

}
