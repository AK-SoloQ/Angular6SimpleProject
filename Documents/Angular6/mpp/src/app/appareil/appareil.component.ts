import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: boolean;
  @Input() indexOfAppareil: number;
  constructor(private ser: AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getStyle() {
    if (this.appareilStatus === false ) {
      return {color : 'red'};
    }
    return {color : 'green'};
  }
  toggel() {
    this.ser.toggelAppareil(this.indexOfAppareil);
  }
}
