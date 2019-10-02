import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PartsComponent} from './search-engine/parts/parts.component';
import {MotorcycleComponent} from './search-engine/motorcycle/motorcycle.component';
import {StartComponent} from './start.component';
import {AutomobileComponent} from './search-engine/automobile/automobile.component';





const Search_Route: Routes = [
  {
    path: '',
    component: <any>StartComponent,
    children: [
      {
        path: '',
        component: <any>AutomobileComponent,
        pathMatch: 'full'
      },
      {
        path: 'parts',
        component: <any>PartsComponent,
        pathMatch: 'full'
      },
      {
        path: 'motorcycle',
        component: <any>MotorcycleComponent,
        pathMatch: 'full'
      }

    ]
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
