import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { AppareilService } from './service/appareil.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';

import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [
  { path: 'apparail', canActivate: [AuthGuard], component: MonPremierComponent },
  { path: 'apparail/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'forms', canActivate: [AuthGuard], component: EditAppareilComponent },
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
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AppareilService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
