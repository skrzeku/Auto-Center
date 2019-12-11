import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftNavisComponent } from './left-navis/left-navis.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module.module';
import { FilterPipe } from './pipes/filter.pipe';
import {ReplaceUnderscorePipe} from './pipes/under.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [NavigationComponent, LeftNavisComponent, FilterPipe, ReplaceUnderscorePipe],
  declarations: [NavigationComponent, LeftNavisComponent, FilterPipe, ReplaceUnderscorePipe],

})
export class CoreModule { }
