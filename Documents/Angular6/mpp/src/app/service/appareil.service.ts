import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AppareilService {
  constructor( private httpClient: HttpClient) {

  }
  public listSubject = new  Subject<any[]>();

  private list: any = [];
  emiteListSubject() {
    this.listSubject.next(this.list.slice());
  }
  switchOnAll() {
    for (const item of this.list) {
      item.status = true;
    }
    this.emiteListSubject();
  }
  switchOffAll() {
    for (const item of this.list) {
      item.status = false;
    }
    this.emiteListSubject();
  }
  toggelAppareil(index) {
    this.list[index].status = !this.list[index].status;
    this.emiteListSubject();
  }
  getAppareilId(index) {
    return this.list[index];
  }
  addAppareil( apparail) {
    this.list.push(apparail);
    this.emiteListSubject();
  }

  saveAppareilInServer() {
    this.httpClient.put('https://http-client-demo-bd3ff.firebaseio.com/appareils.json', this.list).subscribe(
    () => {
      console.log('save to data base ');
    }, (error) => {
      console.log('error dans le save ', error);
    });
  }

  getAppareilInServer() {
    this.httpClient.get('https://http-client-demo-bd3ff.firebaseio.com/appareils.json').subscribe(
      (data) => {
        this.list = data;
        this.emiteListSubject();
      }, (error) => {
        console.log('Error get appareil ', error);
      }
    );
  }
}
