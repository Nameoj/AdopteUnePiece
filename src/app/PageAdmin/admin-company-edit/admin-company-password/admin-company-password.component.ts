import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Sign-up/creation-compte/custom-validators';
import { Seller, SellerEditMdpModel } from 'src/app/models/seller.models';
import { SellerService } from 'src/app/Services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-company-password',
  templateUrl: './admin-company-password.component.html',
  styleUrls: ['./admin-company-password.component.css']
})
export class AdminCompanyPasswordComponent implements OnInit {

  editMdpForm: FormGroup;
  sellerEdit: Seller;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
    this.sellerEdit = this.sellerService.sellerEdit;
    this.editMdpForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: CustomValidators.passwordMatchValidator
    });
  }

   get f() { return this.editMdpForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.editMdpForm.invalid) {
      return;
    }

    const formValue = this.editMdpForm.value;
    const updatedSellerMdp = new SellerEditMdpModel(
      this.sellerEdit.id,
      formValue['password'],
    );

    this.sellerService.updateSellerMdp(updatedSellerMdp, this.sellerEdit.username)
      .subscribe(data => {
        this.sellerService.sellerEdit = data;
      });

    alert('SUCCESS PASSWORD!! :-)');
  }
}

