import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Seller, SellerEditModel } from 'src/app/models/seller.models';
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
  displayMdp = false;

  constructor(private formBuilder: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit() {
    this.sellerEdit = this.sellerService.sellerEdit;
    this.editCompanyForm = this.formBuilder.group({
      raisonSociale: [this.sellerService.sellerEdit.raisonSociale],
      adresse1: [this.sellerEdit.adresse1, Validators.required],
      adresse2: [this.sellerEdit.adresse2],
      codePostal: [this.sellerEdit.codePostal, Validators.required],
      ville: [this.sellerEdit.ville, Validators.required],
      telephone: [this.sellerEdit.telephone, [Validators.required, Validators.pattern('[0][0-9]{9}')]],
      siren: [this.sellerEdit.siren, Validators.required],
      email: [this.sellerEdit.email, [Validators.required, Validators.email]],
      nomG: [this.sellerEdit.nomG, Validators.required],
      prenomG: [this.sellerEdit.prenomG, Validators.required],
      telephoneG: [this.sellerEdit.telephoneG, [Validators.required, Validators.pattern('[0][0-9]{9}')]],
    });
  }

  get f() { return this.editCompanyForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.editCompanyForm.invalid) {
      return;
    }

    const formValue = this.editCompanyForm.value;
    const updatedSellerEdit = new SellerEditModel(
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
    );

    this.sellerService.updateSeller(updatedSellerEdit, this.sellerEdit.username)
      .subscribe(data => {
        console.log(data), this.sellerService.sellerEdit = data,
          console.log('seller updated' + this.sellerService.sellerEdit.raisonSociale);
      });

    alert('SUCCESS!! :-)');
    this.router.navigate(['/admin-home/admin-company-list/']);
  }

  displayMdpControl() {
    this.displayMdp = !this.displayMdp;
  }
}
