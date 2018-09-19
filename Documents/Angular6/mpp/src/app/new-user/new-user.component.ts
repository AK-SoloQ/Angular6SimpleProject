import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private serverUser: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        drinkPrefrence: ['', [Validators.required]],
        hobbies: this.formBuilder.array([])
      }
    );
  }
  onSubmit() {
    console.log('the form is ', this.userForm.value);
    this.serverUser.addUser(this.userForm.value);
    this.serverUser.emitUsers();
    this.router.navigate(['users']);
  }
}
