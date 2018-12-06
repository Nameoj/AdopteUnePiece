import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { SearchVhlComponent } from './Buyer/buyer-home/search-vhl/search-vhl.component';
import { SearchImmatComponent } from './Buyer/buyer-home/search-immat/search-immat.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './All/navbar/navbar.component';
import { SearchBarComponent } from './Buyer/buyer-home/search-bar/search-bar.component';
import { FooterComponent } from './All/footer/footer.component';
import { PanierComponent } from './Buyer/panier/panier.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { ConnexionComponent } from './Sign-up/connexion/connexion.component';
import { CreationCompteComponent } from './Sign-up/creation-compte/creation-compte.component';
import { AnnouncePieceComponent } from './Buyer/announce-piece/announce-piece.component';
import { AnnounceListComponent } from './Buyer/announce-list/announce-list.component';
import { PageAnnounceProComponent } from './Seller/page-announce-pro/page-announce-pro.component';
import { AnnounceItemComponent } from './Buyer/announce-item/announce-item.component';
import { MyAccountComponent } from './Sign-up/my-account/my-account.component';
import { InfospersoComponent } from './Sign-up/my-account/infosperso/infosperso.component';
import { MotdepasseComponent } from './Sign-up/my-account/motdepasse/motdepasse.component';
import { CommandesComponent } from './Sign-up/my-account/commandes/commandes.component';
import { AdressesComponent } from './Sign-up/my-account/adresses/adresses.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { CategoriesComponent } from './Buyer/categories/categories.component';
import { SousCategoriesComponent } from './Buyer/categories/sous-categories/sous-categories.component';
import { SousSousCategoriesComponent } from './Buyer/categories/sous-categories/sous-sous-categories/sous-sous-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AnnounceItemComponent,
    AnnouncePieceComponent,
    AnnounceListComponent,
    PanierComponent,
    BuyerHomeComponent,
    SearchBarComponent,
    SearchVhlComponent,
    PageAnnounceProComponent,
    ConnexionComponent,
    CreationCompteComponent,
    MyAccountComponent,
    SearchImmatComponent,
    AdressesComponent,
    CommandesComponent,
    InfospersoComponent,
    MotdepasseComponent,
    CategoriesComponent,
    SousCategoriesComponent,
    SousSousCategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
