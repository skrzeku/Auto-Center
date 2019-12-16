import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Car} from '../../../core-module/models/car.model';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.less']
})
export class ContactDialogComponent implements OnInit {
  name = '';
  email = '';
  text = '';
  car: Car;
  validbool = false;

  constructor(private dialogref: MatDialogRef<ContactDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: Car) {
    this.car = data;
  }

  ngOnInit() {
  }
  closeDialog(): void {
    this.dialogref.close();
  }
  SendEmail(): void {
    this.validbool = true;
  }


}
