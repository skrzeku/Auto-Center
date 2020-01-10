import {Component, Inject, inject, Input, OnInit} from '@angular/core';
import {Car} from '../../core-module/models/car.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CarsService} from '../../core-module/services/cars.service';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.less']
})
export class SmallModalComponent implements OnInit {
  car: Car;


  constructor(private dialogRef: MatDialogRef<SmallModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Car,
              private carsservice: CarsService) {
    this.car = data;

  }

  ngOnInit() {
  }
  close() {
this.dialogRef.close();
  }
  deleteCar(key: string) {
    this.carsservice.deleteCar(key);
    this.dialogRef.close();
  }

}
