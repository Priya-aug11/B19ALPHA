import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { NotifyAction } from 'src/app/service/snackbar.service';
import { WhishlistService } from 'src/app/service/whishlist.service';
import { IBookList } from 'src/app/shared/component/book-cards/books';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  userId: any;
  wishlistItems$!: Observable<IBookList[]>;
  private unsubscribe$ = new Subject<void>();
  constructor(
    private wishlistService: WhishlistService,
    private notify: NotifyAction
  ) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.getWishlistItems();
  }
  getWishlistItems() {
    this.wishlistItems$ = this.wishlistService.wishlistItem$;
  }

  clearWishlist() {
    this.wishlistService
      .clearWishlist(this.userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (resp: any) => {
          this.wishlistService.wishlistItemcount$.next(resp);
          this.notify.showNotification('Wishlist cleared');
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
