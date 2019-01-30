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
    if (this.buyerService.getAuthenticatedRole() === 'ROLE_BUYER') {
      this.buyerService.getBuyerDetails(this.buyerService.getAuthenticatedUser()).
        subscribe(data => {
          this.buyerConnected = data; this.buyerService.buyerConnected = this.buyerConnected;
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

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

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

    this.buyerService.updateBuyer(newBuyer, this.buyerService.buyerConnected.username)
      .subscribe(data => {
        this.buyerService.buyerConnected = data,
        this.router.navigate(['/myaccount/infosperso']);
      },
        error => {
          this.submitted = false;
        }
      );
  }

}
