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

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
  }

}
