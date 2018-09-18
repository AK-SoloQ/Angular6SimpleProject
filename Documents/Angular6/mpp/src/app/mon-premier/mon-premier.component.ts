import { AppareilService } from './../service/appareil.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {
  public isAuth = false;
  public lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );
  public list: any[];
  constructor(private ser: AppareilService) {
    setTimeout(val => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.list = this.ser.list;
  }

  clickEventHandler(ev) {
    this.ser.switchOnAll();
  }
  clickEventHandler2(ev) {
    this.ser.switchOffAll();
  }

}
