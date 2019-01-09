import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce-list',
  templateUrl: './announce-list.component.html',
  styleUrls: ['./announce-list.component.css']
})
export class AnnounceListComponent implements OnInit {

  constructor() { }

  placeholderForDBListOfAnnounces = {
    results: [
      
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      },
      {
        prix: 5,
        titre: "Axe de bras",
        moto: "APRILIA RS125",
        vendeur: "Lyon pièces auto Recycling",
        image: "https://media.50factory.com/191617-large_default/axe-de-bras-oscillant-aprilia-rs-50-et-tuono-de-1999-a-2005-14x223.jpg",
        note: 4,
        postDate: "5 Dec 2018",
        annee: 2005
      }]
  }


  ngOnInit() {
  }

}
