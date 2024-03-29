import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/models/buyer.models';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private buyerService: BuyerService, private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      adresse1: [this.buyerService.buyerConnected.adresse1, Validators.required],
      adresse2: [this.buyerService.buyerConnected.adresse2],
      codepostal: [this.buyerService.buyerConnected.codepostal, Validators.required],
      ville: [this.buyerService.buyerConnected.ville, Validators.required]
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
      this.buyerService.buyerConnected.id,
      this.buyerService.buyerConnected.email,
      this.buyerService.buyerConnected.email,
      this.buyerService.buyerConnected.password,
      this.buyerService.buyerConnected.civilite,
      this.buyerService.buyerConnected.prenom,
      this.buyerService.buyerConnected.nom,
      this.buyerService.buyerConnected.telephone,
      formValue['adresse1'],
      formValue['adresse2'],
      formValue['codepostal'],
      formValue['ville'],

    );

    this.buyerService.updateBuyer(newBuyer, this.buyerService.buyerConnected.username)
      .subscribe(data => {
        this.buyerService.buyerConnected = data,
        this.router.navigate(['/myaccount/adresses']);
      },
        error => {
          this.submitted = false;
        }
      );
  }

}
