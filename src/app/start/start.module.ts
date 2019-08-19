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

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  exports: [StartComponent],
  declarations: [SearchEngineComponent, MainCarComponent, CarsListComponent, AdvertisingComponent, RestComponent, StartComponent, LeftNaviComponent]
})
export class StartModule { }
