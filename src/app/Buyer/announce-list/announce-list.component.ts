import { Component, OnInit } from '@angular/core';
import { Announce } from 'src/app/models/announce.models';
import { AnnounceService } from 'src/app/Services/announce.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../Services/search.service';

@Component({
  selector: 'app-announce-list',
  templateUrl: './announce-list.component.html',
  styleUrls: ['./announce-list.component.css']
})
export class AnnounceListComponent implements OnInit {

  constructor(private announceService: AnnounceService,  private route: ActivatedRoute, private searchService:SearchService) {
    //j'ai vu ça dans un tuto
    //this.searchService.motoSearched;
   }

  listAnnonces;
  piece;
  //eventEmitter?eventListener?output?
  filterAnnounces=this.searchService.motoSearched;
  ngOnInit() {
    this.listAnnonces =[];
    this.route.params.subscribe((params: Params) =>{
    this.piece = params['piece'];
    if(!this.piece){
      this.getAnnonces()
    }
    else {
      this.listAnnonces = this.announceService.listAnnonce;
      console.log(this.listAnnonces);
      const arrayLength = Object.keys(this.announceService.listAnnonce).length
      const newArray = [];
      console.log(arrayLength);
      for (let i = 0 ;i<arrayLength; i ++) {
          if (this.listAnnonces[i].pieceName == this.piece){
            newArray.push(this.listAnnonces[i])
          }  
      }
      this.listAnnonces = newArray;
    }
    })
  }

  getAnnonces(){
    this.announceService.getAnnounces()
    .subscribe(
      data => { this.listAnnonces = data; this.announceService.listAnnonce = data; console.log(this.listAnnonces); }
    );
  }
}
