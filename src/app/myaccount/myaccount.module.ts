import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module.module';
import {MyaccRoutingModule} from './myacc-routing.module';

import {MyaccountComponent} from './myaccount.component';
import {MaterialModule} from '../material/material.module';
import { SmallModalComponent } from './small-modal/small-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MyaccountComponent, SmallModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MyaccRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [SmallModalComponent],
  exports: []
})
export class MyaccountModule { }
