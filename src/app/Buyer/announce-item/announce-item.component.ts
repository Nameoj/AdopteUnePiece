import { Component, OnInit, Input } from '@angular/core';
import { AnnouncePieceComponent } from '../announce-piece/announce-piece.component';

@Component({
  selector: 'app-announce-item',
  templateUrl: './announce-item.component.html',
  styleUrls: ['./announce-item.component.css']
})
export class AnnounceItemComponent implements OnInit {

  @Input()placeholderForDBAnnounce;

  constructor() { }

  ngOnInit() {
  }

}