import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { WhiteComponent } from './main/white/white.component';
import { BlackComponent } from './main/black/black.component';
import { ArticleComponent } from './articles/article/article.component';

import { ArticleService } from './service/article.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhiteComponent,
    BlackComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
