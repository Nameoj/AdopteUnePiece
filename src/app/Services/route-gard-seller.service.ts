
import { Injectable } from '@angular/core';
import { BuyerService } from './buyer.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGardSellerService {

  constructor(
    private buyerService: BuyerService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.buyerService.isUserLoggedIn() && this.buyerService.getAuthenticatedRole() === 'ROLE_SELLER') {
      return true;
    }

    this.router.navigate(['']);

    return false;
  }
}
