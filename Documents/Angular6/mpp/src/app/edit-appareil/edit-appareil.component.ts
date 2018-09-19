import { Router } from '@angular/router';
import { AppareilService } from './../service/appareil.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'false';
  constructor(private ser: AppareilService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    if ( form.value.status === 'false' ) {
      form.value.status = false;
    } else {
      form.value.status = true;
    }
    this.ser.addAppareil(form.value);
    this.router.navigate(['apparail']);
  }
}
