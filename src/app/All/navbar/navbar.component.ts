import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserConnection } from 'src/app/models/user.connection.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dismiss = "";
  mockNumberOfArticles=1;
  modal;
  registerForm : FormGroup;
  submitted: boolean = false;
  erreurConnection: boolean = false;
//   x =document.getElementById("myModal");
  
  constructor(private buyerService: BuyerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
    });
   }
  
  buyerConnected = this.buyerService.buyerConnected;
   
  click() {
  
  console.log(this.buyerService.isUserLoggedIn()); 
  if (this.buyerService.isUserLoggedIn()) {
    this.router.navigate(['/myaccount/infosperso'])
  }
  else{this.modal="myModal"}
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
    console.log(this.registerForm.value);
     console.log(newUserConnection);
     
     this.buyerService.login(newUserConnection)
     .subscribe(data => 
                       {console.log(data), this.buyerService.buyerConnected = data;
     console.log("buyer logged" + this.buyerService.buyerConnected.username + " " + this.buyerService.buyerConnected.authorities[0].authority);
    

     $("#myModal .close").click();
    
    if (this.buyerService.buyerConnected.authorities[0].authority == "ROLE_ADMIN"){
      this.router.navigate(['/admin-home'])
    }
    else{
    this.router.navigate(['/'])}
  },
                error=>{ this.submitted=false,
                       console.log("erreur!!!"),console.log(error.status), this.erreurConnection = true}
     );

     }

  logout() {
    this.buyerService.logout();
  }

}
