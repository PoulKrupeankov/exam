import { Routes } from '@angular/router';
import { BooksPageComponent } from 'src/app/books-page/books-page.component';



export const routes: Routes = [
  { path: 'books', component: BooksPageComponent },
  { path: '**', component: BooksPageComponent },
];
