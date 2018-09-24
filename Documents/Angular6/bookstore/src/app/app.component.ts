import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAUDUxPc2sMJS8a1BEi8cOgvKM1JayczmM',
      authDomain: 'http-client-demo-bd3ff.firebaseapp.com',
      databaseURL: 'https://http-client-demo-bd3ff.firebaseio.com',
      projectId: 'http-client-demo-bd3ff',
      storageBucket: 'http-client-demo-bd3ff.appspot.com',
      messagingSenderId: '1092803517642'
    };
    firebase.initializeApp(config);


  }

}
