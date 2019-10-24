import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {MainOffersComponent} from './offers.component';
import {OffersComponent} from './offers/offers.component';
import {DetailsComponent} from './details/details.component';
import {NewOfferComponent} from './new-offer/new-offer.component';
import {CarResolve} from '../core-module/services/car-resolve.service';
import {APIResolver} from '../shared-module/Api-resolver';
import {AuthGuard} from '../core-module/services/auth.guard';



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
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: ':key',
        component: <any>DetailsComponent,
        resolve: {car: CarResolve},
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
