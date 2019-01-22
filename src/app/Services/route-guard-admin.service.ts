import { AdminService } from './admin.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardAdminService {

  constructor(
    private router: Router,
    private adminService: AdminService  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.adminService.isUserLoggedIn() && this.adminService.getAuthenticatedRole()=="ROLE_ADMIN")
      return true;

    this.router.navigate(['']);

    return false;
  }

}
