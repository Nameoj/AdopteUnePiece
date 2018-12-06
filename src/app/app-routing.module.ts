import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './All/navbar/navbar.component';
import { FooterComponent } from './All/footer/footer.component';
import { AnnounceItemComponent } from './Buyer/announce-item/announce-item.component';
import { AnnouncePieceComponent } from './Buyer/announce-piece/announce-piece.component';
import { AnnounceListComponent } from './Buyer/announce-list/announce-list.component';
import { PanierComponent } from './Buyer/panier/panier.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { SearchBarComponent } from './Buyer/buyer-home/search-bar/search-bar.component';
import { SearchVhlComponent } from './Buyer/buyer-home/search-vhl/search-vhl.component';
import { PageAnnounceProComponent } from './Seller/page-announce-pro/page-announce-pro.component';
import { ConnexionComponent } from './Sign-up/connexion/connexion.component';
import { CreationCompteComponent } from './Sign-up/creation-compte/creation-compte.component';
import { MyAccountComponent } from './Sign-up/my-account/my-account.component';
import { SearchImmatComponent } from './Buyer/buyer-home/search-immat/search-immat.component';
import { AdressesComponent } from './Sign-up/my-account/adresses/adresses.component';
import { CommandesComponent } from './Sign-up/my-account/commandes/commandes.component';
import { InfospersoComponent } from './Sign-up/my-account/infosperso/infosperso.component';
import { MotdepasseComponent } from './Sign-up/my-account/motdepasse/motdepasse.component';

const routes: Routes = [
  { path: '', component: BuyerHomeComponent },
  { path: 'panier', component: PanierComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'creation-compte', component: CreationCompteComponent},
  { path: 'announce-piece', component: AnnouncePieceComponent },
  { path: 'connexion', component: ConnexionComponent},  
  { path: 'announcelist', component: AnnounceListComponent},
  { path: 'myaccount', component: MyAccountComponent, children : [
      { path: 'infosperso', component: InfospersoComponent},
      { path: 'motdepasse', component: MotdepasseComponent},
      { path: 'commandes', component: AdressesComponent},
      { path: 'adresses', component: CommandesComponent}]
  },
  { path: 'creationCompte', component: CreationCompteComponent},
  { path: 'announce-piece', component: AnnouncePieceComponent},
  { path: 'announce-list', component: AnnounceListComponent},
  { path: 'announce-list', component: AnnounceListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
