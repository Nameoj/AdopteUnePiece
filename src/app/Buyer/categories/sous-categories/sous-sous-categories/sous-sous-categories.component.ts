import { Component, OnInit, Input } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sous-sous-categories',
  templateUrl: './sous-sous-categories.component.html',
  styleUrls: ['./sous-sous-categories.component.css']
})
export class SousSousCategoriesComponent implements OnInit {
  @Input()sousCategories;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  filtrePiece(piece){
    console.log(piece)
     this.router.navigate(['home', piece]);
  }
}
