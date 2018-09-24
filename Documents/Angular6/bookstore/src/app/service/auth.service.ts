import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, pwd: string) {
    return new Promise( (res, rej) => {
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, pwd).then( (value) => {
        res();
      }).catch( (error) => {
        rej(error);
      });
    });
  }

  signInUser(email: string, pwd: string) {
    return new Promise((res, rej) => {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, pwd).then((value) => {
        res();
      }).catch((error) => {
        rej(error);
      });
    });
  }

  signout() {
    firebase.auth().signOut();
  }
}
