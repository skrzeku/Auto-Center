
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared-module/shared-module.module';
import {CoreModule} from './core-module/core-module.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTooltipModule} from '@angular/material';
import 'hammerjs';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {MaterialModule} from './material/material.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {HelpService} from './core-module/services/help.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule, SharedModule, CoreModule, AngularFireModule.initializeApp(environment.firebase),
    MaterialModule, AngularFireDatabaseModule, AngularFontAwesomeModule, BrowserAnimationsModule, MatTooltipModule, MatButtonModule, RouterModule, AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [HelpService]
})
export class AppModule { }
