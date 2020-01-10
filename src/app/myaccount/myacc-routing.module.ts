import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {MyaccountComponent} from './myaccount.component';
import {AuthGuard} from '../core-module/services/auth.guard';


const Myacc: Routes = [

  {
    path: '',
    component: <any>MyaccountComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(Myacc)
  ],
  exports: [
    RouterModule
  ]
})
export class MyaccRoutingModule { }
