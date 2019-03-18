import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent]
})
export class CoreModule { }
