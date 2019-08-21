import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Car} from '../models/car.model';



        //It means availability throughout the project, for every components etc.
@Injectable({
  providedIn: 'root'
})
export class CarsService {
    private Api_url = '/cars';
  constructor(private db: AngularFireDatabase) { }

  getCars(): Observable<Car[]> {
    return this.db.list<Car>(this.Api_url).snapshotChanges()
      .pipe(map(response => response.map(flight => this.assignKey(flight))));
  }

  private assignKey(car) {
    return {...car.payload.val(), key: car.key };
  }
}
