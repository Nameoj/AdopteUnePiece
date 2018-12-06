import { Component, OnInit } from '@angular/core';
import { RecherchePlaqueService } from 'src/app/Services/recherche-plaque.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-search-immat',
  templateUrl: './search-immat.component.html',
  styleUrls: ['./search-immat.component.css']
})
export class SearchImmatComponent implements OnInit {

  infoPlaque;

  constructor(private servicePLaque: RecherchePlaqueService) { }

  ngOnInit() {
  }

  getPlaqueInfo(plaque) {
    this.servicePLaque.getPlaqueInfo(plaque).subscribe(
      (data) => {this.infoPlaque = data;
      console.log(this.infoPlaque)
     });
    
  }

}
