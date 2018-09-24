import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { HeaderComponent } from './main/header/header.component';

// All Service
 import { AuthGuardService } from './service/auth-guard.service';
 import { AuthService } from './service/auth.service';
 import { BookService } from './service/book.service';

 // All Modules

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'book-list', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'book-form', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'book/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: '**', pathMatch:  'full', redirectTo: 'signin' }

];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthGuardService,
    AuthService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
