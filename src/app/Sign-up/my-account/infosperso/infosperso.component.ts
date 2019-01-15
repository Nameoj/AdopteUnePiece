import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/models/buyer.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infosperso',
  templateUrl: './infosperso.component.html',
  styleUrls: ['./infosperso.component.css']
})
export class InfospersoComponent implements OnInit {

  public buyerConnected;

  registerForm: FormGroup;
  submitted = false;
  emailExistant = false;

  constructor(private formBuilder: FormBuilder, private buyerService: BuyerService, private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    console.log(this.buyerService.getAuthenticatedRole());
    if (this.buyerService.getAuthenticatedRole() === 'ROLE_BUYER') {
      this.buyerService.getBuyerDetails(this.buyerService.getAuthenticatedUser()).
        subscribe(data => {
        this.buyerConnected = data; this.buyerService.buyerConnected = this.buyerConnected;
          console.log(this.buyerConnected);
          this.formInit();
        });
    } else {
    this.buyerConnected = this.buyerService.buyerConnected;
      this.formInit();
    }
  }
  formInit() {
    this.registerForm = this.formBuilder.group({
      email: [this.buyerConnected.username, [Validators.required, Validators.email]],
      prenom: [this.buyerConnected.prenom, Validators.required],
      nom: [this.buyerConnected.nom, Validators.required],
      telephone: [this.buyerConnected.telephone, [Validators.required, Validators.pattern('[0][0-9]{9}')]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    const formValue = this.registerForm.value;
    const newBuyer = new Buyer(
      this.buyerConnected.id,
      this.buyerConnected.email,
      this.buyerConnected.email,
      this.buyerConnected.password,
      this.buyerConnected.civilite,
      formValue['prenom'],
      formValue['nom'],
      formValue['telephone'],
      this.buyerConnected.adresse1,
      this.buyerConnected.adresse2,
      this.buyerConnected.codepostal,
      this.buyerConnected.ville,

    );
    console.log(this.registerForm.value);
    console.log(newBuyer);

    this.buyerService.updateBuyer(newBuyer, this.buyerService.buyerConnected.username)
      .subscribe(data => {
        console.log(data), this.buyerService.buyerConnected = data,
        console.log('buyer updated' + this.buyerService.buyerConnected.nom),
        this.router.navigate(['/myaccount/infosperso']);
      },
        error => {
        this.submitted = false,
          console.log('erreur!!!'), console.log(error.status);
        }
      );
  }

}
