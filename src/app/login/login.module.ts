import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MainLoginComponent} from './main-login.component';
import {SharedModule} from '../shared-module/shared-module.module';
import {RouterModule} from '@angular/router';
import {LoginRoutingModule} from './login-routing.module';
import { DealerComponent } from './dealer/dealer.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, RouterModule, LoginRoutingModule
  ],
  exports: [MainLoginComponent, ],
  declarations: [LoginComponent, RegisterComponent, MainLoginComponent, DealerComponent]
})
export class LoginModule { }
