import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from 'src/app/Sign-up/creation-compte/custom-validators';
import { Seller } from 'src/app/models/seller.models';
import { SellerService } from 'src/app/Services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-company-create',
  templateUrl: './admin-company-create.component.html',
  styleUrls: ['./admin-company-create.component.css']
})
export class AdminCompanyCreateComponent implements OnInit {

  createCompanyForm: FormGroup;
  submitted = false;
  emailExistant = false;
  vendeurCree = false;

  constructor(private formBuilder: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
    this.initialisationForm();
  }

  initialisationForm() {
    this.submitted = false;
    this.vendeurCree = false;
    this.createCompanyForm = this.formBuilder.group({
      raisonSociale: ['', Validators.required],
      adresse1: ['', Validators.required],
      adresse2: [''],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('[0][0-9]{9}')]],
      siren: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomG: ['', Validators.required],
      prenomG: ['', Validators.required],
      telephoneG: ['', [Validators.required, Validators.pattern('[0][0-9]{9}')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: CustomValidators.passwordMatchValidator
      });
  }
  get f() { return this.createCompanyForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.createCompanyForm.invalid) {
      return;
    }

    const formValue = this.createCompanyForm.value;
    const newSeller = new Seller(
      0,
      formValue['raisonSociale'],
      formValue['adresse1'],
      formValue['adresse2'],
      formValue['codePostal'],
      formValue['ville'],
      formValue['telephone'],
      formValue['siren'],
      formValue['email'],
      formValue['email'],
      formValue['nomG'],
      formValue['prenomG'],
      formValue['telephoneG'],
      formValue['password']
    );



    this.sellerService.createSeller(newSeller)
      .subscribe(data => {
        this.sellerService.sellerConnected = data;
      },

        error => {
          this.submitted = false,
          this.emailExistant = true;
        }
      );
  }

  relance() {
    this.initialisationForm();
  }
}
