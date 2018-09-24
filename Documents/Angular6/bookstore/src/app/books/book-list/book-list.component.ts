import { BookService } from './../../service/book.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../models/book';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy  {


  books: Book[] = [];
  bookSubscripe: Subscription;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookSubscripe = this.bookService.booksSubject.subscribe( (data) => {
      this.books = data;
    });
    this.bookService.getBooks();
    this.bookService.emiteBooks();
  }

  onNewBook() {
    this.router.navigate(['/book-form']);
  }

  onDeleteBook(book: Book) {
    this.bookService.removeBook(book);
  }
  onViewBook(id: number) {
    this.router.navigate(['/book', id]);
  }
  ngOnDestroy(): void {
    this.bookSubscripe.unsubscribe();
  }
  onDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.bookSubscripe.unsubscribe();
  }

}
