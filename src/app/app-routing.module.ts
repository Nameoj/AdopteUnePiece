import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncePieceComponent } from './Buyer/announce-piece/announce-piece.component';
import { AnnounceListComponent } from './Buyer/announce-list/announce-list.component';
import { PanierComponent } from './Buyer/panier/panier.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { PageAnnounceProComponent } from './Seller/page-announce-pro/page-announce-pro.component';
import { CreationCompteComponent } from './Sign-up/creation-compte/creation-compte.component';
import { MyAccountComponent } from './Sign-up/my-account/my-account.component';
import { AdressesComponent } from './Sign-up/my-account/adresses/adresses.component';
import { CommandesComponent } from './Sign-up/my-account/commandes/commandes.component';
import { InfospersoComponent } from './Sign-up/my-account/infosperso/infosperso.component';
import { MotdepasseComponent } from './Sign-up/my-account/motdepasse/motdepasse.component';
import { AdminHomeComponent } from './PageAdmin/admin-home/admin-home.component';
import { AdminBuyerListComponent } from './PageAdmin/admin-buyer-list/admin-buyer-list.component';
import { AdminCompanyListComponent } from './PageAdmin/admin-company-list/admin-company-list.component';
import { AdminAnnounceListComponent } from './PageAdmin/admin-announce-list/admin-announce-list.component';
import { DataBaseManagmentComponent } from './PageAdmin/data-base-managment/data-base-managment.component';
import { AdminCompanyCreateComponent } from './PageAdmin/admin-company-create/admin-company-create.component';
import { AdminCompanyEditComponent } from './PageAdmin/admin-company-edit/admin-company-edit.component';
import { ErrorPageComponent } from './All/error-page/error-page.component';
import { RouteGardSellerService } from './Services/route-gard-seller.service';
import { RouteGuardAdminService } from './Services/route-guard-admin.service';
import { AdminAnnounceDetailsComponent } from './PageAdmin/admin-announce-details/admin-announce-details.component';


const routes: Routes = [
  { path: '', component: BuyerHomeComponent },
  { path: 'home', component: BuyerHomeComponent },
  { path: 'home/:piece', component: BuyerHomeComponent, runGuardsAndResolvers: 'paramsChange' },
  { path: 'Home/:piece', component: BuyerHomeComponent, runGuardsAndResolvers: 'paramsChange' },
  { path: 'panier', component: PanierComponent },
  { path: 'announcelist', component: AnnounceListComponent },
  { path: 'announcelist/:piece', component: AnnounceListComponent },
  {
    path: 'myaccount', component: MyAccountComponent, children: [
      { path: 'infosperso', component: InfospersoComponent },
      { path: 'motdepasse', component: MotdepasseComponent },
      { path: 'adresses', component: AdressesComponent },
      { path: 'commandes', component: CommandesComponent }]
  },
  { path: 'creationCompte', component: CreationCompteComponent },
  { path: 'announce-piece', component: AnnouncePieceComponent },
  { path: 'announce-piece/:Id', component: AnnouncePieceComponent },
  { path: 'announce-list', component: AnnounceListComponent },
  { path: 'page-announce-pro', component: PageAnnounceProComponent, canActivate: [RouteGardSellerService] },
  { path: 'announce-list-seller', component: PageAnnounceProComponent },
  {
    path: 'admin-home', component: AdminHomeComponent, canActivate: [RouteGuardAdminService], children: [
      { path: 'admin-buyer-list', component: AdminBuyerListComponent },
      { path: 'admin-company-list', component: AdminCompanyListComponent },
      { path: 'admin-announce-list', component: AdminAnnounceListComponent },
      { path: 'admin-announce-list/:username/:idx', component: AdminAnnounceListComponent },
      { path: 'db_manager', component: DataBaseManagmentComponent },
      { path: 'admin-company-edit', component: AdminCompanyEditComponent },
      { path: 'admin-company-create', component: AdminCompanyCreateComponent },
      { path: 'admin-moto-create', component: DataBaseManagmentComponent }]
  },
  { path: 'admin-announce-details/:annonceId', component: AdminAnnounceDetailsComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
