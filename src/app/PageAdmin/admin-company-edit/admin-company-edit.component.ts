import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Sign-up/creation-compte/custom-validators';
import { Seller } from 'src/app/models/seller.models';
import { SellerService } from 'src/app/Services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-company-edit',
  templateUrl: './admin-company-edit.component.html',
  styleUrls: ['./admin-company-edit.component.css']
})
export class AdminCompanyEditComponent implements OnInit {

  editCompanyForm: FormGroup;
  sellerEdit: Seller;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
    this.sellerEdit = this.sellerService.sellerEdit;
    this.editCompanyForm = this.formBuilder.group({
      raisonSociale: [this.sellerEdit.raisonSociale],
      adresse1: [this.sellerEdit.adresse1],
      adresse2: [this.sellerEdit.adresse2],
      codePostal: [this.sellerEdit.codePostal],
      ville: [this.sellerEdit.ville],
      telephone: [this.sellerEdit.telephone],
      siren: [this.sellerEdit.siren],
      email: [this.sellerEdit.email],
      nomG: [this.sellerEdit.nomG],
      prenomG: [this.sellerEdit.prenomG],
      telephoneG: [this.sellerEdit.telephoneG],
      password: [this.sellerEdit.password],
      confirmPassword: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editCompanyForm.invalid) {
      return;
    }

    const formValue = this.editCompanyForm.value;
    this.sellerEdit = new Seller(
      this.sellerEdit.id,
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

    alert('SUCCESS!! :-)');

    console.log('On submit sending info to sellerService.updateSeller');
    this.sellerService.updateSeller(this.sellerEdit, this.sellerEdit.username)
      .subscribe(data => {
        console.log(data), this.sellerService.sellerConnected = data,
          console.log('seller updated' + this.sellerService.sellerConnected.raisonSociale);
      });
    console.log('Return List Seller');
    this.router.navigate(['/admin-home/admin-company-list/']);
    location.reload();
  }
}
