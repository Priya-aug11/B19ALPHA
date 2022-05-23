import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  retry,
  Subject,
} from 'rxjs';
import { IBookList } from '../shared/component/book-cards/books';
export class User {
  userId: number | undefined;
  firstName: string | undefined;
  lastName: number | undefined;
  username: string | undefined;
  userTypeId: number | undefined;
  isLoggedIn: boolean | undefined;
}
@Injectable({
  providedIn: 'root',
})
export class WhishlistService {
  oldUserId: any;
  decodeUserDetails: any;
  public baseURL = 'https://bookcart.azurewebsites.net/';

  wishlistItemcount$ = new Subject<number>();
  wishlistItem$ = new BehaviorSubject<IBookList[]>([]);

  constructor(private http: HttpClient) {}

  setWishlist(response: IBookList[]) {
    this.wishlistItemcount$.next(response.length);
    this.wishlistItem$.next(response);
  }

  clearWishlist(userId: number): Observable<any> {
    return this.http.delete<number>(this.baseURL + `${userId}`, {}).pipe(
      map((response: number) => {
        this.wishlistItem$.next([]);
        return response;
      })
    );
  }

  getToken(): Observable<any> {
    const userdata = { username: 'priya', password: 'Priya@123' };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.decodeUserDetails}`,
        Accept: 'application/json, text/plain, */*',
      }),
    };
    return this.http
      .post<any>(
        this.baseURL + `api/login`,
        JSON.stringify(userdata),
        httpOptions
      )
      .pipe(
        map((resp) => {
          if (resp && resp.token) {
            this.oldUserId = localStorage.getItem('userId');
            localStorage.setItem('authToken', JSON.stringify(resp.token));
            this.setUserDetails();
            localStorage.setItem('userId', resp.userDetails.userId);
          }
        })
      );
  }
  toggleWishlistItem(userId: number, bookId: number): Observable<any> {
    return this.http
      .post<IBookList[]>(
        this.baseURL + `api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        {}
      )
      .pipe(
        map((response: IBookList[]) => {
          this.setWishlist(response);
          return response;
        })
      );
  }
  setUserDetails() {
    if (localStorage.getItem('authToken')) {
      const userDetails = new User();
      this.decodeUserDetails = JSON.parse(
        atob(localStorage.getItem('authToken')!.split('.')[1])
      );
      userDetails.userId = this.decodeUserDetails.userid;
      userDetails.username = this.decodeUserDetails.sub;
      userDetails.userTypeId = Number(this.decodeUserDetails.userTypeId);
      userDetails.isLoggedIn = true;
    }
  }
}
