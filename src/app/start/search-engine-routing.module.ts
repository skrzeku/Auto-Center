import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start.component';





const Search_Route: Routes = [
  {
    path: '',
    component: <any>StartComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Search_Route)
  ],
  exports: [RouterModule]
})
export class SearchEngineRoutingModule { }
