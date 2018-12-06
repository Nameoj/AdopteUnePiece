import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce-piece',
  templateUrl: './announce-piece.component.html',
  styleUrls: ['./announce-piece.component.css']
})
export class AnnouncePieceComponent implements OnInit {

  constructor() { }

  placeholderForDBAnnounce = {
    prix:20,
    titre:"Vend axe aprilia rs125",
    vendeur:"Lyon pièces auto Recycling",
    miniature:"",
    image:"https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
    etat:"disponible",
    description:"Axe de bras. Bien entretenu. Montage simple. Le pas de vis est en bon état.",
    note:4
    }
    placeholderForDBPiece = {
    titre:"axe de bras oscillant",
    marque:"APRILIA",
    cylindree:"RS 125",
    annee:1998,
    }
    
    arrayForRating=new Array(this.placeholderForDBAnnounce.note);

  ngOnInit() {
  }

}
