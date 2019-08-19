import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared-module/shared-module.module';
import {CoreModule} from './core-module/core-module.module';
import {LoginModule} from './login/login.module';
import {DetailsModule} from './details/details.module';
import {StartModule} from './start/start.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTooltipModule} from '@angular/material';
import 'hammerjs';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, SharedModule, CoreModule, LoginModule, DetailsModule,
    StartModule, AngularFontAwesomeModule, BrowserAnimationsModule, MatTooltipModule, MatButtonModule, RouterModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
