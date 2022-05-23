import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IBookList } from '../shared/component/book-cards/books';

@Injectable({
  providedIn: 'root',
})
export class BookstoreService {
  public baseURL = 'https://bookcart.azurewebsites.net/';

  constructor(private http: HttpClient) {}
  books$ = this.loadAllBooks().pipe(shareReplay(1));

  loadAllBooks(): Observable<IBookList[]> {
    const endPoint = 'api/book/';
    return this.http.get<IBookList[]>(this.baseURL + endPoint);
  }

  getbookById(id: number) {
    return this.books$.pipe(map((bId) => bId.find((b) => b.bookId === id)));
  }

  showSimilarItems(bookId: number) {
    const endPoint = 'api/book/GetSimilarBooks/';
    return this.http.get<IBookList[]>(this.baseURL + endPoint + bookId);
  }
}
