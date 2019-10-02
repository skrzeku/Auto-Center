import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module.module';
import {MyaccRoutingModule} from './myacc-routing.module';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { SettingsComponent } from './settings/settings.component';
import { MessagesComponent } from './messages/messages.component';
import {MyaccountComponent} from './myaccount.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [MyaccountComponent, AdvertisementsComponent, SettingsComponent, MessagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MyaccRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class MyaccountModule { }
