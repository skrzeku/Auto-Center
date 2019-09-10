import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Car} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  mybol$ = new Subject<boolean>();
  oneCar$ = new Subject<Car>();

  constructor() { }



  shareCloseValue (bol: boolean): void {
    this.mybol$.next(bol);
    console.log(bol);
  }
}
