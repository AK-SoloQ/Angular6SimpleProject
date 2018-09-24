import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  messageError: string;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.initfForm();
  }

  initfForm() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]]

    });
  }

  onSubmit() {
    const email = this.signInForm.get('email').value;
    const pwd = this.signInForm.get('password').value;
    this.authService.signInUser(email, pwd).then(() => {
      this.route.navigate(['book-list']);
    }, (error) => {
      this.messageError = error;
    });
  }

}
