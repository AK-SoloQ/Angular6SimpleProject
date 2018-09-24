import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.book = new Book('', '', '');
    const id = this.route.snapshot.params['id'];
    this.bookService.getBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }
  onBack() {
    this.router.navigate(['/book-list']);
  }
}
