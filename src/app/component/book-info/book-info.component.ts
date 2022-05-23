import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { BookstoreService } from 'src/app/service/bookstore.service';
import { IBookList } from 'src/app/shared/component/book-cards/books';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  bookId;
  BookDetails$!: Observable<IBookList | null | undefined>;
  // public bookDetails: any;
  constructor(
    private bookService: BookstoreService,
    private route: ActivatedRoute
  ) {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
      this.getBookById();
    });
  }

  getBookById() {
    this.BookDetails$ = this.bookService.getbookById(Number(this.bookId)).pipe(
      catchError((error) => {
        console.log('Error ocurred while fetching book data : ', error);
        return EMPTY;
      })
    );
  }
}
