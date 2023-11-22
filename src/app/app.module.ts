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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtroComponent
  ],
  imports: [
    BrowserModule,
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
