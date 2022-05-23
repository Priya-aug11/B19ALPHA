import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookstoreService } from 'src/app/service/bookstore.service';
import { WhishlistService } from 'src/app/service/whishlist.service';
import { IBookList } from 'src/app/shared/component/book-cards/books';

@Component({
  selector: 'app-landiingpage',
  templateUrl: './landiingpage.component.html',
  styleUrls: ['./landiingpage.component.scss'],
})
export class LandiingpageComponent implements OnInit {
  public bookList!: IBookList[];
  constructor(
    private bookService: BookstoreService,
    private whislistService: WhishlistService
  ) {
    
  }

  ngOnInit(): void {
    this.getToken();
    this.getBooks();
    
  }

  getToken(){
    this.whislistService.getToken().subscribe();
  }
  getBooks() {
    this.bookService.loadAllBooks().subscribe({
      next: (resp: IBookList[]) => {
       /*   console.log('All books :::>', resp); */
        this.bookList = resp;
       // console.log('All books :::>', this.bookList);
      },
      error: (err: any) => {
        console.log('Errors :::>', err);
      },
      complete: () => {
        console.log('request completed');
      },
    });
  }
}
