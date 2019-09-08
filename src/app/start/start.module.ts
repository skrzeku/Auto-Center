import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { MainCarComponent } from './main-car/main-car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { RestComponent } from './rest/rest.component';
import { StartComponent } from './start.component';
import {SharedModule} from '../shared-module/shared-module.module';
import { LeftNaviComponent } from './left-navi/left-navi.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import { AutomobileComponent } from './search-engine/automobile/automobile.component';
import { MotorcycleComponent } from './search-engine/motorcycle/motorcycle.component';
import { PartsComponent } from './search-engine/parts/parts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchEngineRoutingModule} from './search-engine-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule, MaterialModule, ReactiveFormsModule, FormsModule, SearchEngineRoutingModule
  ],
  exports: [StartComponent],
  declarations: [SearchEngineComponent, MainCarComponent, CarsListComponent, AdvertisingComponent, RestComponent, StartComponent, LeftNaviComponent, AutomobileComponent, MotorcycleComponent, PartsComponent]
})
export class StartModule { }
