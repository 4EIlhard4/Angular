import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { OtroComponent } from './page/otro/otro.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'otro', component: OtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
