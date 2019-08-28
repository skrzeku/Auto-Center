import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {MainOffersComponent} from './offers.component';
import {OffersComponent} from './offers/offers.component';
import {DetailsComponent} from './details/details.component';
import {NewOfferComponent} from './new-offer/new-offer.component';



const Offers_Route: Routes = [
  {
    path: '',
    component: <any>MainOffersComponent,
    children: [
      {
        path: '',
        component: <any>OffersComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: <any>NewOfferComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: <any>DetailsComponent,
        pathMatch: 'full'
      }

    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Offers_Route)
  ],
  exports: [
    RouterModule
  ]
})
export class OffersRoutingModule { }
