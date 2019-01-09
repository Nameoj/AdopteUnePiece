import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../../Services/categories.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab-creation',
  templateUrl: './tab-creation.component.html',
  styleUrls: ['./tab-creation.component.css'],
  providers: [NgbRatingConfig]
})
export class TabCreationComponent implements OnInit {
  title = 'UploadImg';
  selectedFile: File = null;
  currentRate = 0;
  url = '';
  choixMarque: boolean = false;
  choixCylindree: boolean = false;
  choixModele: boolean = false;
  creationAnnounceForm: FormGroup;
  nrSelect = "";

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      }
    }
  }

  constructor(config: NgbRatingConfig, 
    private categoriesService: CategoriesService, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 5;
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


  motoCategories = this.categoriesService.mockMotoCategories;

  ngOnInit() {

    // selection photos
    $('#singleUploadForm').submit(function (event) {
      var formElement = this;
      // You can directly create form data from the form element
      // (Or you could get the files from input element and append them to FormData as we did in vanilla javascript)
      var formData = new FormData(formElement);

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

    this.creationAnnounceForm = this.formBuilder.group ({
      brand: ['', Validators.required],
      modele: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      year: ['', Validators.required],
      cylinder: ['', Validators.required],
      pieceType: ['', Validators.required],
      description: ['', Validators.required],
      note: ['', Validators.required],
    })
  }

  getMarque(){
    this.choixMarque = true;
  }
  getCylindree(){
    this.choixCylindree = true;
    console.log(this.nrSelect);
  }
  getModele(){
    this.choixModele = true;
  }
}
