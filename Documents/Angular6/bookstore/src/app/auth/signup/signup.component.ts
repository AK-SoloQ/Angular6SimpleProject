import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, EmailValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  messageError: string;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.initfForm();
  }

  initfForm() {
    this.signUpForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]]

    });
  }

  onSubmit() {
    const email = this.signUpForm.get('email').value;
    const  pwd = this.signUpForm.get('password').value;
    this.authService.createNewUser(email, pwd).then( () => {
      this.route.navigate(['book-list']);
    }, (error) => {
      this.messageError = error;
    });
  }

}
