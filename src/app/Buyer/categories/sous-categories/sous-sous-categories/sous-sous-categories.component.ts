import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sous-sous-categories',
  templateUrl: './sous-sous-categories.component.html',
  styleUrls: ['./sous-sous-categories.component.css']
})
export class SousSousCategoriesComponent implements OnInit {
  @Input()sousCategories;
  constructor() { }

  ngOnInit() {
  }

}
