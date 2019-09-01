import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Car} from '../models/car.model';
import {Mark} from '../models/marks.model';



        //It means availability throughout the project, for every components etc.
@Injectable({
  providedIn: 'root'
})
export class CarsService {
    private Api_url = '/cars';
    private marks_url = '/marks/marks';
    private info_url = 'info/info_db';
  constructor(private db: AngularFireDatabase) { }

  getCars(): Observable<Car[]> {
    return this.db.list<Car>(this.Api_url).snapshotChanges()
      .pipe(map(response => response.map(car => this.assignKey(car))));
  }

  private assignKey(car) {
    return {...car.payload.val(), key: car.key };
  }
  getMarks(): Observable<Mark[]> {
    return this.db.list<Mark>(this.marks_url).snapshotChanges()
      .pipe(map(response => response.map(mark => this.assignKey(mark))));
  }
  getoneMark(key: string): Observable<Mark> {
    return this.db.object<Mark>(`${this.marks_url}/${key}`).snapshotChanges()
      .pipe(map(mark => this.assignKey(mark)));
  }


  getInfoCircle(): Observable <any>{
    return this.db.list<any>(this.info_url).snapshotChanges()
      .pipe(map(response => response.map(info => this.assignKey(info))));
  }




}
