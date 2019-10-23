import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  readonly authState$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) { }



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
}
