import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { SearchVhlComponent } from './Buyer/buyer-home/search-vhl/search-vhl.component';
import { SearchImmatComponent } from './Buyer/buyer-home/search-immat/search-immat.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CreationCompteComponent } from './Sign-up/creation-compte/creation-compte.component';
import { AnnouncePieceComponent } from './Buyer/announce-piece/announce-piece.component';
import { AnnounceListComponent } from './Buyer/announce-list/announce-list.component';
import { PageAnnounceProComponent } from './Seller/page-announce-pro/page-announce-pro.component';
import { AnnounceItemComponent } from './Buyer/announce-item/announce-item.component';
import { MyAccountComponent } from './Sign-up/my-account/my-account.component';
import { InfospersoComponent } from './Sign-up/my-account/infosperso/infosperso.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MotdepasseComponent } from './Sign-up/my-account/motdepasse/motdepasse.component';
import { CommandesComponent } from './Sign-up/my-account/commandes/commandes.component';
import { AdressesComponent } from './Sign-up/my-account/adresses/adresses.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { TabCreationComponent } from './Seller/page-announce-pro/tab-creation/tab-creation.component';
import { TabAnnounceComponent } from './Seller/page-announce-pro/tab-announce/tab-announce.component';
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
import { AdminCompanyCreateComponent } from './PageAdmin/admin-company-create/admin-company-create.component';
import { HttpIntercepterService, httpInterceptorProviders } from './Services/http-intercepter.service';
import { TabCategoriesComponent } from './Seller/page-announce-pro/tab-categories/tab-categories.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AdminCompanyEditComponent } from './PageAdmin/admin-company-edit/admin-company-edit.component';
import { AdminCompanyPasswordComponent } from './PageAdmin/admin-company-edit/admin-company-password/admin-company-password.component';
import { TabCompteComponent } from './Seller/page-announce-pro/tab-compte/tab-compte.component';
import { ErrorPageComponent } from './All/error-page/error-page.component';
import { AdminAnnounceDetailsComponent } from './PageAdmin/admin-announce-details/admin-announce-details.component';



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
    CreationCompteComponent,
    MyAccountComponent,
    SearchImmatComponent,
    AdressesComponent,
    CommandesComponent,
    InfospersoComponent,
    MotdepasseComponent,
    TabCreationComponent,
    TabAnnounceComponent,
    CategoriesComponent,
    SousCategoriesComponent,
    SousSousCategoriesComponent,
    HomeBackgroundComponent,
    AdminHomeComponent,
    AdminBuyerListComponent,
    AdminCompanyListComponent,
    AdminAnnounceListComponent,
    DataBaseManagmentComponent,
    AdminCompanyCreateComponent,
    TabCategoriesComponent,
    AdminCompanyEditComponent,
    AdminCompanyPasswordComponent,
    TabCompteComponent,
    ErrorPageComponent,
    AdminAnnounceDetailsComponent,
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
    NgbPaginationModule,
    NgbAlertModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ScrollDispatchModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
