import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserConnection } from 'src/app/models/user.connection.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mockNumberOfArticles=1;
  modal;
  registerForm : FormGroup;
  submitted: boolean = false;
  
  
  
  constructor(private buyerService: BuyerService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
    });
   }
  
  buyerConnected = this.buyerService.buyerConnected;
   
  click() {
  if (this.buyerConnected==undefined) {
    this.modal="myModal";
  }
  else{this.router.navigate(['/myaccount/infosperso']) }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    const formValue = this.registerForm.value;
     const newUserConnection = new UserConnection(
        0,
       formValue['email'],
       formValue['password'],
     );
    alert('SUCCESS!! :-)');
    console.log(this.registerForm.value);
     console.log(newUserConnection);
     }

}
