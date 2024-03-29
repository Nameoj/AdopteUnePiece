import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';
import { CustomValidators } from '../../creation-compte/custom-validators';
import { Buyer } from 'src/app/models/buyer.models';

@Component({
  selector: 'app-motdepasse',
  templateUrl: './motdepasse.component.html',
  styleUrls: ['./motdepasse.component.css']
})
export class MotdepasseComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private buyerService: BuyerService, private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validator: CustomValidators.passwordMatchValidator
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
      formValue['password'],
      this.buyerService.buyerConnected.civilite,
      this.buyerService.buyerConnected.prenom,
      this.buyerService.buyerConnected.nom,
      this.buyerService.buyerConnected.telephone,
      this.buyerService.buyerConnected.adresse1,
      this.buyerService.buyerConnected.adresse2,
      this.buyerService.buyerConnected.codepostal,
      this.buyerService.buyerConnected.ville,

    );

    this.buyerService.updateBuyer(newBuyer, this.buyerService.buyerConnected.username)
      .subscribe(data => {
        this.buyerService.buyerConnected = data,
        this.router.navigate(['/myaccount/motdepasse']);
      },
        error => {
          this.submitted = false;
        }
      );
  }

}
