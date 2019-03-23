import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared-module/shared-module.module';
import {CoreModule} from './core-module/core-module.module';
import {LoginModule} from './login/login.module';
import {DetailsModule} from './details/details.module';
import {StartModule} from './start/start.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SharedModule, CoreModule, LoginModule, DetailsModule, StartModule, AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
