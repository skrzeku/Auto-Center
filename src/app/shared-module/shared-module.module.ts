import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNaviComponent } from './detail-navi/detail-navi.component';
import { NaviLoginComponent } from './navi-login/navi-login.component';
import { BlueOneComponent } from './blue-one/blue-one.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NaviLoginComponent, DetailNaviComponent, BlueOneComponent, FooterComponent],
  declarations: [DetailNaviComponent, NaviLoginComponent, BlueOneComponent, FooterComponent]
})
export class SharedModule { }
