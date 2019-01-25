import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

// ... your class variables here
navigationSubscription;

constructor(private router: Router, private categorieService: CategoriesService) {
  // subscribe to the router events - storing the subscription so
  // we can unsubscribe later. 
  // this.navigationSubscription = this.router.events.subscribe((e: any) => {
    // If it is a NavigationEnd event re-initalise the component
  //   if (e instanceof NavigationEnd) {
  //     this.initialiseInvites();
  //   }
  // });
}

ngOnInit(){}

// initialiseInvites() {
  // Set default values and re-fetch any data you need.

// }
// ngOnDestroy() {
   // avoid memory leaks here by cleaning up after ourselves. If we  
   // don't then we will continue to run our initialiseInvites()   
   // method on every navigationEnd event.
  //  if (this.navigationSubscription) {  
//       this.navigationSubscription.unsubscribe();
//    }
//  }

}
