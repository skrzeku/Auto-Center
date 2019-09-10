import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftNavisComponent } from './left-navis/left-navis.component';
import {RouterModule} from '@angular/router';
import {CarResolve} from './services/car-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent, LeftNavisComponent],
  declarations: [NavigationComponent, LeftNavisComponent],

})
export class CoreModule { }
