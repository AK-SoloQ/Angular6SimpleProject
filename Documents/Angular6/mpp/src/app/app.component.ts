
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my first app';
  seconde: number;
  counterSub: Subscription;

ngOnInit() {
  const counter = interval(1000);
  /*counter.subscribe(
    (value: number) => {
      this.seconde = value;
    }, (error) => {
      console.log('the error in counter ', error);
    },
    () => {
      console.log('Observable complete');
    }
  );*/

  this.counterSub = counter.subscribe(
    (value) => {
      this.seconde = value;
    }
  );
  }
  ngOnDestroy() {
    this.counterSub.unsubscribe();
  }
}
