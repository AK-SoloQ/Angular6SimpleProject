export class AppareilService {
  public list = [
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
  switchOnAll() {
    for (const item of this.list) {
      item.status = true;
    }
  }
  switchOffAll() {
    for (const item of this.list) {
      item.status = false;
    }
  }
  toggelAppareil(index) {
    this.list[index].status = !this.list[index].status;
  }
  getAppareilId(index) {
    return this.list[index];
  }
}
