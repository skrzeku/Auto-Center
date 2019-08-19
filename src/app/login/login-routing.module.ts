import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const Login: Routes = [
  /*
  {path: '',
    component: <any>ProjectRouterComponent,
    children: [{
      path: '',
      component: <any>ProjectsComponent
    },
      {
        path: ':id',
        pathMatch: 'full',
        component: <any>ProjectDetailsComponent
      }],
  },
  */
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
