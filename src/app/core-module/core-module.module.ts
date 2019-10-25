import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftNavisComponent } from './left-navis/left-navis.component';
import {RouterModule} from '@angular/router';
import {CarResolve} from './services/car-resolve.service';
import {SharedModule} from '../shared-module/shared-module.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [NavigationComponent, LeftNavisComponent, FilterPipe],
  declarations: [NavigationComponent, LeftNavisComponent, FilterPipe],

})
export class CoreModule { }
