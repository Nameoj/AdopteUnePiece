import { BuyerService } from './../../../Services/buyer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Announce } from '../../../models/announce.models';
import { AnnounceService } from '../../../Services/announce.service';
import * as $ from 'jquery';
import { listenToElementOutputs } from '@angular/core/src/view/element';

@Component({
  selector: 'app-tab-creation',
  templateUrl: './tab-creation.component.html',
  styleUrls: ['./tab-creation.component.css'],
  providers: [NgbRatingConfig]
})
export class TabCreationComponent implements OnInit {

  creationAnnounce: FormGroup;

  date=  new Date(Date.now());
  title = 'UploadImg';
  selectedFile: File = null;
  rateChoice = 0;
  uri : string ='';
  url: string = '';
  choixMarque: boolean = false;
  choixCylindree: boolean = false;
  choixModele: boolean = false;

  brands = ["Honda","Kawasaki","Suzuki","Yamaha"]
  cylinders = ["50cc","80cc","125cc","250cc","400cc","500cc","600cc","700cc","800cc","900cc","1000cc"]
  motoModels = ["Cucux","Giovani","GF","Ninja","Varadero"]
  years = ["1990","1991","1992","1993","1994","1995","1996"]
  cadres = ["Cadre", "Arraignée avant", "Boucle arrière", "Divers cadre"]
  pieceType : string;
  seller : string;
  annonceForm: FormGroup;
  submitted: boolean = false;


  constructor(
    private config: NgbRatingConfig, 
    private categoriesService: CategoriesService, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private buyerService: BuyerService,
    private announceService: AnnounceService,
    private router: Router) 
    {config.max = 5;
    // customize default values of ratings used by this component tree
    }

  motoCategories = this.categoriesService.mockMotoCategories;

  ngOnInit() {

    const _this = this;

    this.creationAnnounce = this.formBuilder.group ({
      brand: ['', Validators.required],
      cylinder: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      pieceType: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
      price: ['', Validators.required],
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
  getPieceType(pieceType) {
    this.pieceType = pieceType;
  }

  onSubmit(){
    const formValue = this.creationAnnounce.value;
    console.log(this.uri)
    const newAnnounce = new Announce(
      0,
     this.buyerService.getAuthenticatedUser(),
     this.uri,
     formValue['description'],
     formValue['note'],
     this.date,
     this.pieceType,
     formValue['model'],
     formValue['brand'],
     formValue['cylinder'],
     formValue['year'],
     formValue['price'],
     20,);
     
    console.log(newAnnounce)

    this.announceService.createAnnounce(newAnnounce).subscribe( data => console.log(data));

  }
}

