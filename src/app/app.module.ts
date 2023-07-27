import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BooksPageModule } from './books-page/books-page.module';


import { BookPageService } from './servises/modules/book-page/book-page.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BooksPageModule,

  ],
  providers: [BookPageService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
