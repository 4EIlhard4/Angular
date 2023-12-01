import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CargarScriptsService } from "./services/cargar-scripts.service"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OtroComponent } from './page/otro/otro.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { LogoutComponent } from './page/logout/logout.component';
import { HeaderComponent } from './commons/header/header.component';

const config = {
  apiKey: "AIzaSyAVTQPAYnnvNNnuz_lMF0MHmaLWiEgQy1w",
  authDomain: "api-rest-5d504.firebaseapp.com",
  databaseURL: "https://api-rest-5d504-default-rtdb.firebaseio.com",
  projectId: "api-rest-5d504",
  storageBucket: "api-rest-5d504.appspot.com",
  messagingSenderId: "423196493847",
  appId: "1:423196493847:web:d5e6f64d6f64ae760d3452",
  measurementId: "G-F70S9EY8FM"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtroComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(()=> initializeApp(config)),
    provideAuth(()=> getAuth()),
    AppRoutingModule,
    NgParticlesModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
