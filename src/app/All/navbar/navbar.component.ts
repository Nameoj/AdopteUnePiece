import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserConnection } from 'src/app/models/user.connection.model';
import * as $ from 'jquery';
import { CommandesService } from 'src/app/Services/commandes.service';
import { AnnounceService } from 'src/app/Services/announce.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dismiss = '';
  nbArticles;
  modal;
  registerForm: FormGroup;
  submitted = false;
  erreurConnection = false;
  buyerConnected = this.buyerService.buyerConnected;
  isLogged;

  //   x =document.getElementById("myModal");

  constructor(private buyerService: BuyerService, private router: Router,
    private formBuilder: FormBuilder, private serviceCommande: CommandesService,
    private annonceService: AnnounceService) { }



  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.nbArticles = this.serviceCommande.nbArticle;
    this.isLogged = this.buyerService.isUserLoggedIn();
  }



  click() {
    if (this.buyerService.isUserLoggedIn() && this.buyerService.getAuthenticatedRole() === 'ROLE_BUYER') {
      this.router.navigate(['/myaccount/infosperso']);
    } else if (this.buyerService.isUserLoggedIn() && this.buyerService.getAuthenticatedRole() === 'ROLE_SELLER') {
      this.router.navigate(['/page-announce-pro']);
    } else if (this.buyerService.isUserLoggedIn() && this.buyerService.getAuthenticatedRole() === 'ROLE_ADMIN') {
      this.router.navigate(['/admin-home']);
    } else { this.modal = 'myModal'; }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.erreurConnection = false;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const formValue = this.registerForm.value;
    const newUserConnection = new UserConnection(
      0,
      formValue['email'],
      formValue['email'],
      formValue['password'],
    );

    this.buyerService.login(newUserConnection)
      .subscribe(data => {
        this.buyerService.buyerConnected = data;

        $('#myModal .close').click();

        this.isLogged = this.buyerService.isUserLoggedIn();

        if (this.buyerService.buyerConnected.authorities[0].authority === 'ROLE_ADMIN') {
          this.router.navigate(['/admin-home']);
        } else if (this.buyerService.isUserLoggedIn() && this.buyerService.getAuthenticatedRole() === 'ROLE_SELLER') {
          this.router.navigate(['/page-announce-pro']);
        } else {
          this.router.navigate(['/home']);
        }
      },
        error => {
          this.submitted = false;
          this.erreurConnection = true;
        }
      );

  }

  logout() {
    this.serviceCommande.nbArticle = 0;

    for (let i = 0; i < this.nbArticles; i ++) {
      this.annonceService.undeleteAnnonce(this.serviceCommande.commandes[i].id)
      .subscribe(data => console.log(data));
      }
    this.serviceCommande.commandes = [];

    this.nbArticles = 0;

    this.buyerService.logout();

    this.isLogged = this.buyerService.isUserLoggedIn();
  }

}
