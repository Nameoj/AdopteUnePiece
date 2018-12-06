import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
    motoCategories= this.categoriesService.mockMotoCategories;
    phoneScreen:boolean=window.matchMedia("(max-width:768px)").matches;

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
  ngOnInit() {
  }

}
