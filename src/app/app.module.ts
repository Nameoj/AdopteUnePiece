import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { SearchVhlComponent } from './Buyer/buyer-home/search-vhl/search-vhl.component';
import { SearchImmatComponent } from './Buyer/buyer-home/search-immat/search-immat.component';
import { NavbarComponent } from './All/navbar/navbar.component';
import { SearchBarComponent } from './Buyer/buyer-home/search-bar/search-bar.component';
import { FooterComponent } from './All/footer/footer.component';
import { PanierComponent } from './Buyer/panier/panier.component';
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
import { CategoriesComponent } from './Buyer/categories/categories.component';
import { SousCategoriesComponent } from './Buyer/categories/sous-categories/sous-categories.component';
import { SousSousCategoriesComponent } from './Buyer/categories/sous-categories/sous-sous-categories/sous-sous-categories.component';
import { HomeBackgroundComponent } from './Buyer/home-background/home-background.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AdminHomeComponent } from './PageAdmin/admin-home/admin-home.component';
import { AdminBuyerListComponent } from './PageAdmin/admin-buyer-list/admin-buyer-list.component';
import { AdminCompanyListComponent } from './PageAdmin/admin-company-list/admin-company-list.component';
import { AdminAnnounceListComponent } from './PageAdmin/admin-announce-list/admin-announce-list.component';
import { DataBaseManagmentComponent } from './PageAdmin/data-base-managment/data-base-managment.component';
//Material Angular
import { MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatCardModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatInput,
  MatTableModule,
  MatCheckboxModule,
  MatExpansionModule,
} from '@angular/material';


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
    SousSousCategoriesComponent,
    HomeBackgroundComponent,
    AdminHomeComponent,
    AdminBuyerListComponent,
    AdminCompanyListComponent,
    AdminAnnounceListComponent,
    DataBaseManagmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    MatCardModule,
    ScrollDispatchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
