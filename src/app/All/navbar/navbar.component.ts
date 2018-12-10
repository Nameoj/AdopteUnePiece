import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mockNumberOfArticles=1;
  modal;
  
  
  
  constructor(private buyerService: BuyerService, private router: Router) { }

  ngOnInit() { console.log(this.buyerConnected); console.log("merde");}
  
  buyerConnected = this.buyerService.buyerConnected;
   
  click() {if (this.buyerConnected==undefined) {
    this.modal="myModal";
  }
  else{this.router.navigate(['/myaccount/infosperso']) }
}
}
