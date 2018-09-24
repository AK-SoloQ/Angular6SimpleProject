import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Subject } from 'rxjs';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];
  booksSubject = new  Subject<Book[]>();
  constructor() { }

  emiteBooks() {
    this.booksSubject.next(this.books);
  }

  saveBooks() {
     firebase.database().ref('/books').set(this.books);
  }

  getBooks() {
    firebase.database().ref('/books').on('value', (data) => {
      this.books = data.val() ? data.val() : [];
      this.emiteBooks();
    });
  }
  getBook(id: number) {
    return new Promise(
      (res, rej) => {
        firebase.database().ref('/books/' + id).once('value' , (data) => {
          res(data.val());
        }, (error) => {
          rej(error);
        });
      }
    );
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emiteBooks();
  }

  removeBook(book: Book) {
    if (book.photo) {
      const storageRef = firebase.storage().refFromURL(book.photo);
      storageRef.delete().then( () => {
        console.log('photo deleted');
      }).catch( (error) => {
        console.log('error ');
      });
    }
    const findIndexBookToRemove = this.books.findIndex( (itemBook) => {
      if (itemBook === book) {
        return true;
      } else {
        return false;
      }
    });
    this.books.splice(findIndexBookToRemove, 1);
    this.saveBooks();
    this.emiteBooks();
  }

  uploadFile (file: File) {
    return new Promise( (res, rej) => {
      const almostUniqueFileName = Date.now().toString();
      const upload = firebase.storage().ref().child('images/' + almostUniqueFileName + file.name);
      const uploadTask = upload.put(file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          console.log('chargement...');
        }, (error) => {
           console.error('error de chargement:', error);
           rej();
        }, () => {
          // console.log('done ,,,,', upload.getDownloadURL());
          res(upload.getDownloadURL());
        });
    });
  }
}
