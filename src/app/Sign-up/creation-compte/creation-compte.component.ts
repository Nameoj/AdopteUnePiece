import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { Buyer } from 'src/app/models/buyer.models';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  

  constructor(private formBuilder: FormBuilder, private buyerService: BuyerService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group ({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      civilite: ['monsieur', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      adresse1: ['', Validators.required],
      adresse2: [''],
      codepostal: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('[0][0-9]{9}') ]],
      ville: ['', Validators.required]
    },
    {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    const formValue = this.registerForm.value;
     const newBuyer = new Buyer(
        0,
       formValue['email'],
       formValue['password'],
       formValue['civilite'],
       formValue['prenom'],
       formValue['nom'],
       formValue['telephone'],
       formValue['adresse1'],
       formValue['adresse2'],
       formValue['codepostal'],
       formValue['ville'],
      
     );
    alert('SUCCESS!! :-)');
    console.log(this.registerForm.value);
     console.log(newBuyer);

    this.buyerService.createBuyer(newBuyer)
    .subscribe(data => (console.log(data), error => console.log(error), this.buyerService.buyerConnected = data,
    console.log(this.buyerService.buyerConnected.nom),
    this.router.navigate(['/'])),
    
    );
    


}

}
