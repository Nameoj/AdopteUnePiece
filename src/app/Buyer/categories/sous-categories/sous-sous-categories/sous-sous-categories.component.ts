import { Component, OnInit, Input } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
@Component({
  selector: 'app-sous-sous-categories',
  templateUrl: './sous-sous-categories.component.html',
  styleUrls: ['./sous-sous-categories.component.css']
})
export class SousSousCategoriesComponent implements OnInit {

  @Input()sousCategories;

  filterCounter;
  constructor(private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  filtrePiece(piece){
    console.log(piece)
    this.categoriesService.filterCounter ++;
    if (this.categoriesService.filterCounter % 2 ==0){
     this.router.navigate(['home', piece]);}
    else{this.router.navigate(['Home', piece]);}
  }
}
