import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
  // private firstUser = new User('AK', 'Abd','ahmed')
  private users: User[] = [{
    firstName: 'Ak',
    lastName: 'Abd',
    email: 'ak-abd@gmail.com',
    drinkPrefrence: 'Coca-cola',
    hobbies: 'dev'
  }];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

}
