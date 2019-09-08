import { NgModule } from '@angular/core';
import {
  MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPlaceholder, MatRadioModule,
  MatSelectModule,
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
        MatCheckboxModule,
      ];



@NgModule({
  declarations: [],
  exports: [...Materials],
  providers: []
})
export class MaterialModule { }
