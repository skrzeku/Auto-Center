import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';



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
        MatCheckboxModule
      ];

@NgModule({
  declarations: [],
  exports: [...Materials]
})
export class MaterialModule { }
