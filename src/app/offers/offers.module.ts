import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared-module/shared-module.module';
import { OffersComponent } from './offers/offers.component';
import {DetailsComponent} from './details/details.component';
import {RouterModule} from '@angular/router';
import {OffersRoutingModule} from './offers-routing.module';
import {MainOffersComponent} from './offers.component';
import {CoreModule} from '../core-module/core-module.module';
import { NewOfferComponent } from './new-offer/new-offer.component';
import {MaterialModule} from '../material/material.module';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ImgdialogComponent } from './details/imgdialog/imgdialog.component';
import { ContactDialogComponent } from './details/contact-dialog/contact-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    OffersRoutingModule,
    CoreModule,
    MatInputModule,
    MaterialModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [OffersComponent, NewOfferComponent],
  declarations: [DetailsComponent, OffersComponent, MainOffersComponent, NewOfferComponent, ImgdialogComponent, ContactDialogComponent],
  entryComponents: [ImgdialogComponent, ContactDialogComponent]
})
export class OffersModule { }
