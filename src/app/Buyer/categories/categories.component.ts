import { Component, OnInit, HostListener } from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  constructor(private categoriesService: CategoriesService) {

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let menuButton = document.getElementById("menuButton");
    let y = window.scrollY;
    let whenToShow = screen.height
    if (y > screen.height-200) {
      menuButton.style.opacity = "1"
      this.disableButton=false;
    } else {
      menuButton.style.opacity = "0"
      this.disableButton=true;
    }
  }


  disableButton:boolean=true;
  phoneScreen: boolean = window.matchMedia("(max-width:768px)").matches;
  motoCategories = this.categoriesService.mockMotoCategories;

  openNav() {
    let sideNav = document.getElementById("sidenav");
    sideNav.style.width = "300px";
  }
  closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }
  collapse(index) {
    let categ = document.getElementById('categ' + index)
    if (categ.style.display == "block") {
      categ.style.display = "none";
    }
    else {
      categ.style.display = "block";
    }
  }

  ngOnInit() {
  }
}
