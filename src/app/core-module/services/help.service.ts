import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Car} from '../models/car.model';
import {Filter} from '../models/filter.model';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  mybol$ = new Subject<boolean>();
  oneCar$ = new Subject<Car>();
  array: Filter[] = [];
  marks$ = new BehaviorSubject<string[]>(null);
  cars$ = new BehaviorSubject<string[]>(null);


  constructor() { }



  shareCloseValue (bol: boolean): void {
    this.mybol$.next(bol);
    console.log(bol);
  }

  PushFilterArray(name: string, value: any, value2: any): void {
    this.array.push({
      name: name,
      value: value,
      value2: value2
    });
    console.log(this.array);
  }
    // remove one element
  PopFilterArray() {
    this.array.pop();
  }

  ShareMarks(marks) {
  this.marks$.next(marks);
  console.log(marks);
  }
  ShareCars(cars) {
  this.cars$.next(cars);
  }



}
