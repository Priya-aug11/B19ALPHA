import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NotifyAction } from 'src/app/service/snackbar.service';
import { WhishlistService } from 'src/app/service/whishlist.service';
import { IBookList } from '../book-cards/books';

@Component({
  selector: 'app-book-add-to-fav',
  templateUrl: './book-add-to-fav.component.html',
  styleUrls: ['./book-add-to-fav.component.scss'],
})
export class BookAddToFavComponent implements OnInit, OnChanges {
  @Input()
  bookId: any;

  @Input()
  showButton = false;

  public toggle: boolean | undefined;
  public buttonText: string | undefined;

  constructor(
    private whishlistService: WhishlistService,
    private notify: NotifyAction
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.whishlistService.wishlistItem$
      .pipe()
      .subscribe((bookData: IBookList[]) => {
        this.setFavourite(bookData);
        this.setButtonText();
      });
  }
  setFavourite(bookData: IBookList[]) {
    //  console.log('set fav', this.bookId);
    const favBook = bookData.find((f) => f.bookId === this.bookId);

    if (favBook) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

  setButtonText() {
    if (this.toggle) {
      this.buttonText = 'Remove from Wishlist';
    } else {
      this.buttonText = 'Add to Wishlist';
    }
  }

  toggleValue() {
    this.toggle = !this.toggle;
    this.setButtonText();
    const userId = 814;
    this.whishlistService.toggleWishlistItem(userId, this.bookId).subscribe({
      next: (resp: IBookList[]) => {
        if (this.toggle) {
          this.notify.showNotification('Item added to your Wishlist');
        } else {
          this.notify.showNotification('Item removed from your Wishlist');
        }
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
