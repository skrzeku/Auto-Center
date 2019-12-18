import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftNavisComponent } from './left-navis/left-navis.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared-module/shared-module.module';
import { FilterPipe } from './pipes/filter.pipe';
import {ReplaceUnderscorePipe} from './pipes/under.pipe';
import {Ng2SearchPipe} from './pipes/searchfilter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [NavigationComponent, LeftNavisComponent, FilterPipe, ReplaceUnderscorePipe, Ng2SearchPipe, SearchPipe],
  declarations: [NavigationComponent, LeftNavisComponent, FilterPipe, ReplaceUnderscorePipe, Ng2SearchPipe, SearchPipe],

})
export class CoreModule { }
