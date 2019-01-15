import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce.models';
import { AnnounceService } from 'src/app/Services/announce.service';

@Component({
  selector: 'app-announce-list',
  templateUrl: './announce-list.component.html',
  styleUrls: ['./announce-list.component.css']
})
export class AnnounceListComponent implements OnInit {

  constructor(private announceService: AnnounceService) { }

  listAnnonces;


  ngOnInit() {
    this.announceService.getAnnounces().subscribe( data => {this.listAnnonces = data; console.log(this.listAnnonces)})
    
  }

}
