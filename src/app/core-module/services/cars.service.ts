import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Car, Image} from '../models/car.model';
import {Mark} from '../models/marks.model';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';



        //It means availability throughout the project, for every components etc.
@Injectable({
  providedIn: 'root'
})
export class CarsService {
    private Api_url = '/cars';
    private marks_url = '/marks/marks';
    private info_url = 'info/info_db';
    carSubject = new BehaviorSubject(null);
  private basePath = '/img';
  constructor(private db: AngularFireDatabase,
              private router: Router,
              private activeroute: ActivatedRoute) { }

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

  addCar(car: Car) {
    return this.db.list<Car>(this.Api_url).push(car);
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/offers/', car.key]);
  }


  getCar(key: string): Observable<Car> {
    return this.db.object<Car>(`${this.Api_url}/${key}`).snapshotChanges()
      .pipe(map(car => this.assignKey(car)));
  }

  shareCar(car: Car) {
    this.carSubject.next(car);
    console.log(car);
  }


  pushFileToStorage(fileUpload: FileList, progress: { percentage: number }, path) {
for (let i = 0; i <= fileUpload.length - 1; i++) {
  const storageRef = firebase.storage().ref();
  const uploadTask = storageRef.child(`${'/' + path}/${fileUpload[i].name}`).put(fileUpload[i]);
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
      // success
      //fileUpload.url = uploadTask.snapshot.downloadURL;  to edit!!
      //fileUpload.key = fileUpload.file.name;
      this.saveFileData(fileUpload[i], path);
    }
  );
}

  }


   saveFileData(fileUpload: File, path) {
    this.db.list(`${'/' + path}/`).push(fileUpload);
  }

}
