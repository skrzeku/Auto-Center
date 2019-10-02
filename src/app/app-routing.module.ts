import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';






const APP_ROUTES : Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', loadChildren: '../app/start/start.module#StartModule'},
  {path: 'login', loadChildren: '../app/login/login.module#LoginModule'},
  {path: 'offers', loadChildren: '../app/offers/offers.module#OffersModule'},
  {path: 'myaccount', loadChildren: '../app/myaccount/myaccount.module#MyaccountModule'}



];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    //scrollPositionRestoration is using for Angular 6.1+ means: Scroll to top after rooting!
    RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
