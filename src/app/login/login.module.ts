import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MainLoginComponent} from './main-login.component';
import {SharedModule} from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent, MainLoginComponent]
})
export class LoginModule { }
