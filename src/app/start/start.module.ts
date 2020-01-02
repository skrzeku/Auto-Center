import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { StartComponent } from './start.component';
import {SharedModule} from '../shared-module/shared-module.module';
import { LeftNaviComponent } from './left-navi/left-navi.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchEngineRoutingModule} from './search-engine-routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule, MaterialModule, ReactiveFormsModule, FormsModule, SearchEngineRoutingModule
  ],
  exports: [StartComponent],
  declarations: [SearchEngineComponent, StartComponent, LeftNaviComponent]
})
export class StartModule { }
