import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-announce-details',
  templateUrl: './admin-announce-details.component.html',
  styleUrls: ['./admin-announce-details.component.css']
})
export class AdminAnnounceDetailsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  returnLastPage() {
    this._location.back();
  }

}
