import { NgModule } from '@angular/core';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPlaceholder, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSnackBarConfig,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {RangeSliderModule} from 'ngx-rangeslider-component';

      const MY_SNACK_GLOBAL_CONFIG: MatSnackBarConfig = {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      };





      const Materials = [
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSelectModule,
        MatToolbarModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSliderModule,
        RangeSliderModule
      ];



@NgModule({
  declarations: [],
  exports: [...Materials],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MY_SNACK_GLOBAL_CONFIG
    }
  ]
})
export class MaterialModule { }
