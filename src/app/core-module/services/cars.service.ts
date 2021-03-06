import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, publishBehavior} from 'rxjs/operators';
import {Car, Image} from '../models/car.model';
import {Mark} from '../models/marks.model';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';
import {HelpService} from './help.service';



        //It means availability throughout the project, for every components etc.
@Injectable({
  providedIn: 'root'
})
export class CarsService {
    private Api_url = '/cars';
    private marks_url = '/marks/marks';
    private info_url = 'info/info_db';
    carSubject$ = new BehaviorSubject(null);
    allCars$ = new BehaviorSubject(null);
  private basePath = '/img';
  constructor(private db: AngularFireDatabase,
              private router: Router,
              private activeroute: ActivatedRoute,
              private helpserv: HelpService) { }

  getCars(): Observable<Car[]> {
    return this.db.list<Car>(this.Api_url).snapshotChanges()
      .pipe(map(response => response.map(car => this.assignKey(car))));
  }


  private assignKey(car) {
    return {...car.payload.val(), key: car.key };
  }


  getInfoCircle(): Observable <any> {
    return this.db.list<any>(this.info_url).snapshotChanges()
      .pipe(map(response => response.map(info => this.assignKey(info))));
  }

  addCar(car: Car) {
    return this.db.list<Car>(this.Api_url).push(car);
  }
  deleteCar(key: string) {
    return this.db.object(`${this.Api_url}/${key}`).remove();
  }
  editCar(key: string, car: Car) {
    return this.db.object<Car>(`${this.Api_url}/${key}`).update(car);
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/offers/', car.key]);
  }


  getCar(key: string): Observable<Car> {
    return this.db.object<Car>(`${this.Api_url}/${key}`).snapshotChanges()
      .pipe(map(car => this.assignKey(car)));
  }

  shareCar(car: Car) {
    this.carSubject$.next(car);
  }
  shareCars(cars: Car[]) {
    this.allCars$.next(cars);
  }

  pushFileToStorage(fileUpload: FileList, progress: { percentage: number }, path, method?) {
for (let i = 0; i <= fileUpload.length - 1; i++) {
  const storageRef = firebase.storage().ref();
  const uploadTask = storageRef.child(`${'/' + path}/${(i + 1) + '.png'}`).put(fileUpload[i]);
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      // in progress
      const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
    },
    (error) => {
      // fail
      console.log(error);
    },
    () => {
      this.saveFileDatawithoutThen(fileUpload[i], path);
    }
  );
}
  }
  pushMaintoStorage(fileUpload: File, progress: {percentage: number}, path, method?: any) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${'/' + path}/${0 + '.png'}`).put(fileUpload);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        this.saveFileData(fileUpload, path, method);
      });
  }




   saveFileData(fileUpload: File, path, method) {
    this.db.list(`${'/' + path}/`).push(fileUpload).then(() => {
      method();
    });
  }
  saveFileDatawithoutThen(fileUpload: File, path) {
    this.db.list(`${'/' + path}/`).push(fileUpload);
  }

}
