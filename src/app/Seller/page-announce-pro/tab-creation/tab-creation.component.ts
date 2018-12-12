import { Component, OnInit, Input } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { CategoriesService } from '../../../Services/categories.service';
import { Announce } from '../../../models/announce.models';
import { AnnounceService } from '../../../Services/announce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab-creation',
  templateUrl: './tab-creation.component.html',
  styleUrls: ['./tab-creation.component.css'],
  providers: [NgbRatingConfig]
})
export class TabCreationComponent implements OnInit {

  @Input() announce: Announce;

  currentRate = 0;

  constructor(
    config: NgbRatingConfig, private categoriesService: CategoriesService,
    private announceService: AnnounceService,
    private router: Router
    ) {
    // customize default values of ratings used by this component tree
    config.max = 5;
  }

  motoCategories= this.categoriesService.mockMotoCategories;

  ngOnInit() {
  }

  updateActive(is)

  openNav() {
    let sideNav=document.getElementById("sidenav");
      sideNav.style.width="300px";
  }

  closeNav() {
    document.getElementById("sidenav").style.width = "0";
  } 

  collapse(index){
    let categ=document.getElementById('categ'+index)
    if (categ.style.display=="block"){
    categ.style.display ="none";
  }
    else {
      categ.style.display="block";
    }
  }

}
