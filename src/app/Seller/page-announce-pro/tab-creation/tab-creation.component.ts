
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as $ from 'jquery';
import { Announce } from '../../../models/announce.models';
import { AnnounceService } from '../../../Services/announce.service';


@Component({
  selector: 'app-tab-creation',
  templateUrl: './tab-creation.component.html',
  styleUrls: ['./tab-creation.component.css'],
  providers: [NgbRatingConfig]
})
export class TabCreationComponent implements OnInit {

    creationAnnounce = new FormGroup({
    brand: new FormControl(),
    cylinder: new FormControl(),
    model: new FormControl(),
    year: new FormControl(),
    pieceType: new FormControl(),
    description: new FormControl(),
    note: new FormControl(),
  })

  title = 'UploadImg';
  selectedFile: File = null;
  rateChoice = 0;
  url = '';
  choixMarque: boolean = false;
  choixCylindree: boolean = false;
  choixModele: boolean = false;

  brands = ["Honda","Kawasaki","Suzuki","Yamaha"]
  cylinders = ["50cc","80cc","125cc","250cc","400cc","500cc","600cc","700cc","800cc","900cc","1000cc"]
  motoModels = ["Cucux","Giovani","GF","Ninja","Varadero"]
  years = ["1990","1991","1992","1993","1994","1995","1996"]
  cadres = ["Cadre", "Arraignée avant", "Boucle arrière", "Divers cadre"]
  pieceType : string;
  annonceForm: FormGroup;
  submitted: boolean = false;


  constructor(
    private config: NgbRatingConfig, 
    private categoriesService: CategoriesService, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private announceService: AnnounceService,
    private router: Router) 
    {config.max = 5;
    // customize default values of ratings used by this component tree
    }

  motoCategories = this.categoriesService.mockMotoCategories;

  ngOnInit() {

    // selection photos
    $('#singleUploadForm').submit(function (event) {
      let formElement = this;
      // You can directly create form data from the form element
      // (Or you could get the files from input element and append them to FormData as we did in vanilla javascript)
      let formData = new FormData(formElement);

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8080/api/uploadFile",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          console.log(response);
          // process response
        },
        error: function (error) {
          console.log(error);
          // process error
        }
      });
      event.preventDefault();
    });

    // this.creationAnnounceB = this.formBuilder.group ({
    //   brand: ['', Validators.required],
    //   modele: ['', Validators.required],
    //   image: ['', Validators.required],
    //   price: ['', Validators.required],
    //   year: ['', Validators.required],
    //   cylinder: ['', Validators.required],
    //   pieceType: ['', Validators.required],
    //   description: ['', Validators.required],
    //   note: ['', Validators.required],
    // })
  }

  //  -------   ----------------   ---------------    METHODS FOR FILE UPLOADER --------    ---------------   -------------- ------------
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      }
    }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:8080/api/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }

// ----   -----------------------  -------------   METHODS FOR FORM -----------------------------  ---------------------- -------- --------- --------

  getMarque(){
    this.choixMarque = true;
  }
  getCylindree(){
    this.choixCylindree = true;
  }
  getModele(){
    this.choixModele = true;
  }

  doSomething(pieceType) {
    this.pieceType = pieceType;
  }

  onSubmit(){
    const announce : Announce = this.creationAnnounce.value;
    console.log(announce)
    console.log(this.pieceType);
  }

    // console.log(this.annonceForm.value);
    // console.log(newAnnonce);

    //  this.announceService.createAnnounce(newAnnonce)
    //  this.router.navigate(['/']);
}