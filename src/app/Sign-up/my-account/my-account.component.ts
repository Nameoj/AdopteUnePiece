import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
selector: 'app-my-account',
templateUrl: './my-account.component.html',
styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

infosPerso: boolean = false;
motDePasse: boolean = true;
adresses: boolean= true;
commandes: boolean= true;


constructor(private buyerService: BuyerService) { }

getMotdePasse(){
this.motDePasse = false;
this.infosPerso= true;
this.adresses= true;
this.commandes= true;
}

getInfosPerso(){
this.motDePasse = true;
this.infosPerso= false;
this.adresses= true;
this.commandes= true;
}
getCommandes(){
this.motDePasse = true;
this.infosPerso= true;
this.adresses= true;
this.commandes= false;
}
getAdresses(){
this.motDePasse = true;
this.infosPerso= true;
this.adresses= false;
this.commandes= true;
}

ngOnInit() {
console.log(this.motDePasse)
}

}