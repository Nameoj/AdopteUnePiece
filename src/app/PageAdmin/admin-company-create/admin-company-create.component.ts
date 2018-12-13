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
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group ({
      RaisonSociale: ['', Validators.required],
      Adressse: ['', Validators.required],
      CodePostal: ['', Validators.required],
      Ville: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('[0][0-9]{9}') ]],
      Siret: ['', Validators.required],
      Siren: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomG: ['', Validators.required],
      prenomG: ['', Validators.required],
      telephoneG: ['', Validators.required],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.createCompanyForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
        return;
    }

    const formValue = this.createCompanyForm.value;
     const newSeller = new Seller(
        0,
       formValue['RaisonSociale'],
       formValue['Adressse'],
       formValue['CodePostal'],
       formValue['Ville'],
       formValue['telephone'],
       formValue['Siret'],
       formValue['Siren'],
       formValue['email'],
       formValue['nomG'],
       formValue['prenomG'],
       formValue['telephoneG'],
       formValue['password'],
      
     );
    alert('SUCCESS!! :-)');
    console.log(this.createCompanyForm.value);
     console.log(newSeller);

    this.sellerService.createSeller(newSeller)
    .subscribe(data => (console.log(data), error => console.log(error), this.sellerService.sellerConnected = data,
    console.log(this.sellerService.sellerConnected.nom),
    this.router.navigate(['/'])),
    
    );
    
  }
}
