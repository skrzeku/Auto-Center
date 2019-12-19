import { Component, OnInit } from '@angular/core';
import {Car} from '../core-module/models/car.model';
import {AuthorizationService} from '../core-module/services/authorization.service';
import {CarsService} from '../core-module/services/cars.service';
import {HelpService} from '../core-module/services/help.service';
import {Router} from '@angular/router';
declare var require;

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  car: Car;
  Chance = require('chance');
  BigCar: Car;
  midCars: Car[] = [];
  smallCars: Car[] = [];
  allcars: Car[];
  types = ['Hatchback', 'Sedan', 'Wagon', 'Coupe', 'Convertible', 'Luxury', 'Pickup', 'Suv', 'Van'];
  randomCars: Car[];




  constructor(private carsserv: CarsService,
              private helpserv: HelpService,
              private router: Router) { }

  ngOnInit() {
    this.carsserv.getCars().subscribe((cars) => {
      this.chanceit(cars);
      this.allcars = cars;
      this.randomCars = cars.slice(0, 10);
    });

  }
  goToDetails(car: Car): void {
    this.carsserv.goToCarDetails(car);
  }
  goTopromotedCars() {
    this.helpserv.array.length = 0;
    this.helpserv.PushFilterArray('premium', true, '' );
    this.router.navigate(['offers']);
  }


  chanceit(array): void {
    const chance = new this.Chance();
    const uniques = chance.unique(chance.natural, array.length, {min: 0, max: array.length - 1});
    for (let i = 0; i < 11; i++ ) {
      if (i < 1) {
        this.BigCar = array[uniques[i]];
      }
      else if (i < 5) {
        this.midCars.push(array[uniques[i]]);
      }
      else if (i < 11) {
        this.smallCars.push(array[uniques[i]]);
      }
    }
  }

}
