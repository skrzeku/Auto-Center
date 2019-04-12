import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {SharedModule} from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DetailsComponent],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
