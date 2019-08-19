import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftNavisComponent } from './left-navis/left-navis.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [NavigationComponent, LeftNavisComponent],
  declarations: [NavigationComponent, LeftNavisComponent]
})
export class CoreModule { }
