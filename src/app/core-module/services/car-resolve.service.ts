
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Car} from '../models/car.model';
import {CarsService} from './cars.service';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/internal/operators';

@Injectable()
export class CarResolve implements Resolve<Car> {
  constructor(private carsservice: CarsService) {}


  // Resolve give you a chance to w8 for load contents of components, then show u a view. This is very good option to build bigger apps.
  // With Resolve u can delete all Elvis operators for example: ?
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car> {

    // operator params give u a abilities to get a parameters from Website Api for example:
    // http:// realmadrid.com/shop/15 here param mean 15 it can be called 'id' or something like that
    return this.carsservice.getCar(route.params['key'])
      .pipe(
        take(1),
        map((car: Car) => car));
  }}
