import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { MotoTypeService } from 'src/app/Services/moto-type.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  // ... your class variables here
  navigationSubscription;

  vehicleChoiced: string;

  constructor(private router: Router, private categorieService: CategoriesService, private motoTypeService: MotoTypeService) {
  }

  ngOnInit() {
    this.vehicleChoiced = this.motoTypeService.vehicleChoiced;
  }

  onVehicleChoice(vehicleChoiced: string) {
    this.motoTypeService.vehicleChoiced = vehicleChoiced;
    this.vehicleChoiced = vehicleChoiced;
  }

}
