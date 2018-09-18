import { Subject } from 'rxjs';

export class AppareilService {
  public listSubject = new  Subject<any[]>();

  private list = [
    {
      name: 'LG',
      status: false
    },
    {
      name: 'Sony',
      status: true
    },
    {
      name: 'Samsung',
      status: true
    }
  ];
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
}
