import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authStatus: boolean;
  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authSer.isAuth;
  }
  onSignIn() {
    this.authSer.signIn().then(value => {
      this.authStatus = this.authSer.isAuth;
      console.log('SignIn Done', value);
      this.router.navigate(['apparail']);
    });
  }
  onSignOut() {
    this.authSer.signOut();
    this.authStatus = this.authSer.isAuth;
    console.log('SignOut Done');
  }
}
