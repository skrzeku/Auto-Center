import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLoginComponent} from './main-login.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DealerComponent} from './dealer/dealer.component';


const Login: Routes = [

  {path: '',
    component: <any>MainLoginComponent,
    children: [
      {
        path: '',
        component: <any>LoginComponent,
      },
      {
        path: 'register',
        component: <any>RegisterComponent,
        pathMatch: 'full'
      },
      {
        path: 'dealer',
        component: <any>DealerComponent,
        pathMatch: 'full'
      }

    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(Login)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
