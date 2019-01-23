import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/models/seller.models';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  sellers: Seller[];
  sellersObservable: BehaviorSubject<Seller[]>;
  sortCompanyForm: FormGroup;
  filterSelect: String;


  constructor(private sellerService: SellerService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.sellerService.getAllSellers().subscribe(
      response => {
        this.sellers = response;
        this.sellersObservable = new BehaviorSubject(this.sellers.map(s => ({ ...s })));
        this.sellerService.sellers = this.sellers;
      },
    );
    this.sortCompanyForm = this.formBuilder.group({
      filterValue: []
    });

  }

  edit(seller) {
    console.log('displaying seller from admin-company-list: ' + seller);
    this.sellerService.sellerEdit = seller;
    this.router.navigate(['/admin-home/admin-company-edit']);
  }

  delete(seller) {
    if (confirm(`Etes-vous sûr de vouloir supprimer cette casse ?`)) {
      this.sellerService.deleteSeller(seller)
        .subscribe(data => {
          this.sellerService.sellerEdit = data;
          console.log(this.sellerService.sellerEdit);
          this.sellerService.getAllSellers().subscribe(
            response => {
              this.sellers = response;
              // Mettre à jour le tableau
              this.sellersObservable.next(response);
            }
          );
        });
    } else { }

  }

  seeAnounces(username, idx) {
    console.log(idx);
    console.log('See announces of this seller');
    this.router.navigate(['/admin-home/admin-announce-list', username, idx]);
  }

  onSubmit() {
    const filterValue = this.sortCompanyForm.value.filterValue;
    this.applyFilter(filterValue);
  }

  /**
   * Calcule la distance de Levenstein entre les string a et b
   * @param a
   * @param b
   */
  calculerDistance(a: string, b: string) {
    let m = [], i, j, min = Math.min;

    if (!(a && b)) return (b || a).length;

    for (i = 0; i <= b.length; m[i] = [i++]);
    for (j = 0; j <= a.length; m[0][j] = j++);

    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        m[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
          ? m[i - 1][j - 1]
          : m[i][j] = min(
            m[i - 1][j - 1] + 1,
            min(m[i][j - 1] + 1, m[i - 1][j]));
      }
    }

    return m[b.length][a.length];
  }

  /**
   * Applique le filtre passé en paramèttre et met à jour le tableau en fonction
   * de la distance entre le nom et le filtre
   * @param filterValue
   */
  applyFilter(filterValue: string) {
    console.log(filterValue);
    const obj: any[] = this.sellers;
    switch(this.filterSelect) {
      case 'rs':
        obj.map((s) => s.distance = this.calculerDistance(s.raisonSociale, filterValue));
        break;
      case 'cp':
        obj.map((s) => s.distance = this.calculerDistance(s.codePostal, filterValue));
        break;
    }
    obj.sort((a, b) => a.distance - b.distance);
    obj.forEach((a) => console.log('Distance entre ', a.raisonSociale, ' et ', filterValue, ' : ', a.distance));
    obj.map((s) => delete s.distance);
    this.sellers = obj;

    // Mettre à jour le tableau
    this.sellersObservable.next(this.sellers);
    console.log("mise à jour du tableau")
    console.log(this.sellers);
  }

  indexTrackFn = (index: number) => index;
  nameTrackFn = (_: number, item: Seller) => item.ville;

  sortBy(prop: 'raisonSociale' | 'ville') {
    this.sellersObservable.next(this.sellers.map(s => ({ ...s })).sort((a, b) => {
      const aProp = a[prop], bProp = b[prop];
      if (aProp < bProp) {
        return -1;
      } else if (aProp > bProp) {
        return 1;
      }
      return 0;
    }));
  }
}
