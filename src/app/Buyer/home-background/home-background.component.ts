import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-background',
  templateUrl: './home-background.component.html',
  styleUrls: ['./home-background.component.css']
})
export class HomeBackgroundComponent implements OnInit {

  constructor() { }

  scrollBackground(){
    //comment: reducing background animation
    /*let aPageSize = document.getElementById('aPageSize');
    let logoBackground=document.getElementById('logoBackground');
    let closeButton=document.getElementById('closeButton');
    aPageSize.style.height="0px";
    logoBackground.style.height = "0px";
    closeButton.style.display="none";
    setTimeout(function(){logoBackground.style.display="none"},401)*/
    
    //version scrolldown
    let windowHeight = window.innerHeight;
    window.scrollTo({top:windowHeight, left: 0, behavior:'smooth'});
  }

  ngOnInit() {
  }

}
