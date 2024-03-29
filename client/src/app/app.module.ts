// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardVisiteurComponent } from './dashboard-visiteur/dashboard-visiteur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { Restaurants1Component } from './restaurants1/restaurants1.component';
import { Restaurants3Component } from './restaurants3/restaurants3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardVisiteurComponent,
    DashboardComponent,
    InscriptionComponent,
    RestaurantsComponent,
    Restaurants1Component,
    Restaurants3Component,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Ajoutez FormsModule ici
    // ... autres modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

