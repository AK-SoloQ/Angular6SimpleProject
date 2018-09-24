import { BookService } from './../../service/book.service';
import { Book } from './../../models/book';
 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  public bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  ngOnInit(): void {
    this.initForm();
  }

 constructor(
   private formBuilder: FormBuilder,
   private bookService: BookService,
   private router: Router
 ) {

 }
 OnInit() {
  this.initForm();
 }
 initForm() {
   this.bookForm = this.formBuilder.group({
     titre: ['', Validators.required],
     author: ['', Validators.required]
   });
 }
 onSaveBook() {
   const title = this.bookForm.get('titre').value;
   const author = this.bookForm.get('author').value;
   let urlImage = '';
   if (this.fileUploaded && this.fileUrl !== '') {
    urlImage = this.fileUrl;
   }
   console.log('this is image', urlImage);
   const newBook = new Book(title, author, urlImage);
   this.bookService.createNewBook(newBook);
   this.router.navigate(['/book-list']);
 }


 onUploadFile(file: File) {
  this.fileIsUploading = true;
  this.bookService.uploadFile(file).then(
    (value: string) => {
      // onsole.log('the value is ', value);
      this.fileUrl = value;
      this.fileIsUploading = false;
      this.fileUploaded = true;
    });
 }

 detectFile(event) {
   this.onUploadFile(event.target.files[0]);
 }
}
