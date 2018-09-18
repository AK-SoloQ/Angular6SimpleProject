import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  public name = 'Appareil';
  public status = false;

  constructor( private appareilService: AppareilService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id =  this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilId(id).name;
    this.status = this.appareilService.getAppareilId(id).status;
  }

}
