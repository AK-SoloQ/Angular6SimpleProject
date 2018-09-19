import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { AppareilService } from './service/appareil.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'apparail', canActivate: [AuthGuard], component: MonPremierComponent },
  { path: 'apparail/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'forms', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '', pathMatch: 'full', redirectTo: 'auth'  },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' }
];

export const appRouting = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    SingleAppareilComponent,
    NotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AppareilService, AuthService, AuthGuard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
