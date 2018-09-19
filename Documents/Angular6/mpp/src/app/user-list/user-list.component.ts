import { UserService } from './../service/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubcription: Subscription;

  constructor( private serviceUser: UserService) { }

  ngOnInit() {
    this.userSubcription =  this.serviceUser.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.serviceUser.emitUsers();
  }
  ngOnDestroy() {
    this.userSubcription.unsubscribe();
  }
}
