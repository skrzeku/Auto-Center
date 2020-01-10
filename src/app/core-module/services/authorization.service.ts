import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Client} from '../models/client.model';
import {Car} from '../models/car.model';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  readonly authState$ = this.fireAuth.authState;
  private User_url = '/users';

  constructor(private fireAuth: AngularFireAuth,
              private db: AngularFireDatabase) { }



  login(credentials: {email, password}) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  register(credentials: {email, password}) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  get user() {
    return this.fireAuth.auth.currentUser;
  }
  addUser(client: Client) {
    return this.db.list<Client>(this.User_url).push(client);
  }
  editUser(key: string, client: Client) {
    return this.db.object<Client>(`${this.User_url}/${key}`).update(client);
  }

  getUsers(): Observable<Client[]> {
    return this.db.list<Client>(this.User_url).snapshotChanges()
      .pipe(map(response => response.map(car => this.assignKey(car))));
  }
  private assignKey(client) {
    return {...client.payload.val(), key: client.key };
  }
  getUser(email: string): Observable<Client> {
    return this.db.object<Client>(`${this.User_url}/${email}`).snapshotChanges()
      .pipe(map(client => this.assignKey(email)));
  }
}
