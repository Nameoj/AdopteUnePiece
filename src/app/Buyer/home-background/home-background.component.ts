import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.css']
})
export class HomeBackgroundComponent implements OnInit {

  constructor() { }

  scrollBackground() {
    const windowHeight = window.innerHeight;
    window.scrollTo({ top: windowHeight, left: 0, behavior: 'smooth' });
  }

  ngOnInit() {
  }

}
