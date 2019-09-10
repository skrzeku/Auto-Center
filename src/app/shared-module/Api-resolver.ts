import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import {CarsService} from '../core-module/services/cars.service';

@Injectable()
export class APIResolver implements Resolve<any> {
  constructor(private carsservice: CarsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.carsservice.getCar(route.params['key']);
  }
}
