import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../core-module/services/cars.service';
import {Car} from '../../core-module/models/car.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.less']
})
export class AdvertisementsComponent implements OnInit {

  amountOfCurrent: number = 2;
  amountOfRecent: number = 0;
  booli: boolean = true;
  currentBoolean: boolean = true;
  category: string[] = ['Osobowe', 'Ciężarowe', 'Motocykle', 'Części'];
  amount: string[] = ['10', '20', '50'];
  cars: Car[];

  constructor( private carservice: CarsService) { }

  ngOnInit() {
    this.carservice.getCars().subscribe((cars) => {
      this.cars = cars;
      this.amountOfCurrent = this.cars.length;
    });

  }
  changevoid(str: string) {
    if (str === 'curr') {
      this.currentBoolean = true;
    }
    if (str === 'rec') {
      this.currentBoolean = false;
    }
    else return;
  }
  gotoDetails(car: Car) {
    this.carservice.goToCarDetails(car);

  }
  sortIt() {
    this.booli = !this.booli;
  }

}
