import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
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
        MatButtonModule
      ];

@NgModule({
  declarations: [],
  exports: [...Materials]
})
export class MaterialModule { }
