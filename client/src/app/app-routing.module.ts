// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardVisiteurComponent } from './dashboard-visiteur/dashboard-visiteur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { Restaurants1Component } from './restaurants1/restaurants1.component';
import { Restaurants3Component } from './restaurants3/restaurants3.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirection par défaut vers le composant de connexion
  { path: 'dashboard-visiteur', component: DashboardVisiteurComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'PlanetFood', component: Restaurants1Component },
  { path: 'BellaNapoli', component: Restaurants3Component },






  // ... autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

