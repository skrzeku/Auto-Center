import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';




const APP_ROUTES : Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {path: 'main', component: <any> StartComponent, pathMatch: 'full'},
  {path: 'login', loadChildren: '../app/login/login.module#LoginModule'},

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
