import { BuyerService } from './../../../Services/buyer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Announce } from '../../../models/announce.models';
import { AnnounceService } from '../../../Services/announce.service';
import * as $ from 'jquery';
import { ResearchMoto } from '../../../models/researchMoto.models';
import { listenToElementOutputs } from '@angular/core/src/view/element';
import { stringify } from 'querystring';
import { MotoTypeService } from 'src/app/Services/moto-type.service';

@Component({
  selector: 'app-tab-creation',
  templateUrl: './tab-creation.component.html',
  styleUrls: ['./tab-creation.component.css'],
  providers: [NgbRatingConfig]
})
export class TabCreationComponent implements OnInit {

  choixMarque = false;
  choixCylindree = false;
  choixModele = false;

  allMotos: any = [];
  allMotosCylYear: any = [];
  allMotosCylYearDetail;
  allMotosB: any = [];
  allMotosM: any = [];
  allMotosC: any = [];
  allMotosY: any = [];

  newModel;
  newBrand;
  newCylindree;
  newYear;
  searchMoto: ResearchMoto;





  creationAnnounce: FormGroup;

  date = new Date(Date.now());
  selectedFile: File = null;
  note = 0;
  uri: string = null;
  url = '';
  noInputUri = false;
  noInputPieceName = false;
  noInputNote = false;
  successSubmit = false;
  pieceName: string;
  seller: string;
  annonceForm: FormGroup;
  submitted = false;
  joie;

  brands = ['Honda', 'Kawasaki', 'Suzuki', 'Yamaha'];
  cylinders = ['50cc', '80cc', '125cc', '250cc', '400cc', '500cc', '600cc', '700cc', '800cc', '900cc', '1000cc'];
  motoModels = ['Cucux', 'Giovani', 'GF', 'Ninja', 'Varadero'];
  years = ['1990', '1991', '1992', '1993', '1994', '1995', '1996'];
  cadres = ['Cadre', 'Araignée avant', 'Boucle arrière', 'Divers cadre'];


  constructor(
    private config: NgbRatingConfig,
    private categoriesService: CategoriesService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private buyerService: BuyerService,
    private announceService: AnnounceService,
    private router: Router,
    private motoTypeService: MotoTypeService) {
    config.max = 5;
    // customize default values of ratings used by this component tree
  }

  motoCategories = this.categoriesService.mockMotoCategories;


  getMarque() {
    this.choixMarque = true;
  }
  getCylindree() {
    this.choixCylindree = true;
  }

  getModele() {
    this.choixModele = true;
  }

  callJson() {
    this.allMotos = this.motoTypeService.getAll().subscribe(res => {
      this.allMotosB = [];
      this.allMotos = res;
      for (let i = 0; i < Object.keys(this.allMotos).length; i++) {
        this.allMotosB.push(this.allMotos[i].name);
      }
    });
  }

  onSelectBrand(brand) {
    this.getMarque();
    this.newBrand = brand;
    this.allMotosM = [];
    // tslint:disable-next-line:no-unused-expression
    this.allMotosCylYear;
    this.motoTypeService.getBrand(brand).subscribe(res => {
      this.allMotos = res;
      for (let i = 0; i < Object.keys(res).length; i++) {
        this.allMotosM.push(this.allMotos.motoModels[i].modelName);
      }
    });
    console.log(this.allMotos);
  }

  onSelectModele(model) {
    this.getModele();
    this.allMotosC = [];
    this.newModel = model;
    this.motoTypeService.getCylindree(model).subscribe(res => {
      console.log(res);
      this.allMotosCylYearDetail = res;
      for (let i = 0; i < Object.keys(res).length; i++) {
        this.allMotosC.push(this.allMotosCylYearDetail[i].motoCylinder);
      }
      console.log(this.allMotosC);
    });

  }

  onSelectCylindree(cylindree) {
    this.getCylindree();
    this.allMotosY = [];
    this.newCylindree = cylindree;
    for (let i = 0; i < Object.keys(this.allMotosCylYearDetail).length; i++) {
      this.allMotosY.push(this.allMotosCylYearDetail[i].motoYear);
      console.log(this.allMotosY);
    }
  }

  onSelectYear(year) {
    this.newYear = year;
  }





  ngOnInit() {
    this.callJson();
    const _this = this;

    this.creationAnnounce = this.formBuilder.group({
      brand: ['', Validators.required],
      cylinder: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      description: ['', Validators.required],
      // note: ['', Validators.required],
      price: ['', Validators.required],
      charge: ['', Validators.required],
    });

    // selection photos
    $('#singleUploadForm').submit(function (event) {
      const formElement = this;
      // You can directly create form data from the form element
      // (Or you could get the files from input element and append them to FormData as we did in vanilla javascript)
      const formData = new FormData(formElement);

      $.ajax({
        type: 'POST',
        enctype: 'multipart/form-data',
        url: 'http://localhost:8080/api/uploadFile',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          _this.uri = response.fileDownloadUri;
          console.log(response);

          console.log(_this.uri);
          // process response
        },
        error: function (error) {
          console.log(error);
          // process erro
        }
      });
      event.preventDefault();
    });
  }

  //  -------   ----------------   ---------------    METHODS FOR FILE UPLOADER --------    ---------------   -------------- ------------
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      };
    }
  }

  getPieceName(pieceName) {
    this.pieceName = pieceName;
  }

  get f() { return this.creationAnnounce.controls; }

  reinitializeAlert() { this.successSubmit = false; }

  reinitializeForm() {
    this.uri = null;
    this.pieceName = null;
    this.url = '';
    this.note = 0;
  }

  prefilledFormAfterSubmit() {
    const formValue = this.creationAnnounce.value;

    this.creationAnnounce = this.formBuilder.group({
      brand: [formValue['brand'], Validators.required],
      cylinder: [formValue['cylinder'], Validators.required],
      model: [formValue['model'], Validators.required],
      year: [formValue['year'], Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      charge: ['', Validators.required],
    });
    this.reinitializeForm();
  }

  onSubmit() {

    const formValue = this.creationAnnounce.value;

    this.submitted = true;

    // stop here if form is invalid
    if (this.creationAnnounce.invalid) {
      return;
    }
    if (this.uri == null) {
      this.noInputUri = true;
      return;
    } else {
      this.noInputUri = false;
    }
    if (this.pieceName == null) {
      this.noInputPieceName = true;
      return;
    } else {
      this.noInputPieceName = false;
    }
    if (this.note === 0) {
      this.noInputNote = true;
      return;
    } else {
      this.noInputNote = false;
    }


    const newAnnounce = new Announce(
      0,
      this.buyerService.getAuthenticatedUser(),
      this.uri,
      formValue['description'],
      this.note,
      this.date,
      this.pieceName,
      formValue['model'],
      formValue['brand'],
      formValue['cylinder'],
      formValue['year'],
      formValue['price'],
      formValue['charge']);
    console.log(newAnnounce);

    this.announceService.createAnnounce(newAnnounce).subscribe(data => {

      this.successSubmit = true;
      setTimeout(() => this.successSubmit = false, 4000);
      this.submitted = false;
      this.prefilledFormAfterSubmit();
    }
    );



  }
}

