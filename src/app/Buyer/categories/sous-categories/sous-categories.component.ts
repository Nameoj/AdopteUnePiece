import { Component, OnInit, Input } from '@angular/core';
import { listener } from '@angular/core/src/render3';

@Component({
  selector: 'app-sous-categories',
  templateUrl: './sous-categories.component.html',
  styleUrls: ['./sous-categories.component.css']
})
export class SousCategoriesComponent implements OnInit {
  @Input() categories;
  @Input() overIndex;
  constructor() { }

  collapse(index) {
    const list = document.getElementById('list' + index);
    if (list.style.display === 'block') {
      list.style.display = 'none';
    } else {
      list.style.display = 'block';
    }
  }
  ngOnInit() {
  }

}
