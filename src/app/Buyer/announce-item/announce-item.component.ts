import { Component, OnInit, Input } from '@angular/core';
import { AnnouncePieceComponent } from '../announce-piece/announce-piece.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announce-item',
  templateUrl: './announce-item.component.html',
  styleUrls: ['./announce-item.component.css']
})
export class AnnounceItemComponent implements OnInit {

  @Input()announce;
  @Input()index;


  constructor(private router: Router,) { }

  ngOnInit() {
  }

  detailAnnonce(annonceId){
    console.log( "route détail annonce");
    console.log(annonceId);
    annonceId ++;
    this.router.navigate(['/announce-piece', annonceId]);
  }
}