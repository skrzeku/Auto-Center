import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AdvertisementsComponent} from './advertisements/advertisements.component';
import {MessagesComponent} from './messages/messages.component';
import {SettingsComponent} from './settings/settings.component';
import {MyaccountComponent} from './myaccount.component';
import {AuthGuard} from '../core-module/services/auth.guard';


const Myacc: Routes = [

  {
    path: '',
    component: <any>MyaccountComponent,
    children: [
      {
        path: '',
        component: <any>AdvertisementsComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'messages',
        component: <any>MessagesComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        component: <any>SettingsComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
      }
    ]
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
