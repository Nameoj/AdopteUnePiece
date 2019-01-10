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
  motoCategories = this.categoriesService.mockMotoCategories;

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
