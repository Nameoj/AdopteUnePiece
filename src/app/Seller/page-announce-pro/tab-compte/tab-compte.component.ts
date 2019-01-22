import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from 'src/app/Sign-up/creation-compte/custom-validators';
import { Seller, SellerEditMdpModel } from 'src/app/models/seller.models';
import { SellerService } from 'src/app/Services/seller.service';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-tab-compte',
  templateUrl: './tab-compte.component.html',
  styleUrls: ['./tab-compte.component.css']
})
export class TabCompteComponent implements OnInit {

  passwordForm: FormGroup;
  sellerConnected: String;
  sellerEdit;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder, private buyerService: BuyerService, private sellerService: SellerService,) { }

  ngOnInit() {
    this.initialisationForm();
    this.sellerConnected = this.buyerService.getAuthenticatedUser();
    this.sellerEdit = this.sellerService.getSeller(this.sellerConnected);
  }

  initialisationForm() {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.passwordForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }

    const formValue = this.passwordForm.value;
    const updatedSellerMdp = new SellerEditMdpModel(
      this.sellerEdit.id,
      formValue['password'],
    );

    this.sellerService.updateSellerMdp(updatedSellerMdp, this.sellerConnected)
      .subscribe(data => {
        console.log(data), this.sellerService.sellerEdit = data,
          console.log('Euh ouais');
    });

    alert("Mot de passe changé");
  }

}
