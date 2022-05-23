import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-move-to-bag',
  templateUrl: './book-move-to-bag.component.html',
  styleUrls: ['./book-move-to-bag.component.scss'],
})
export class BookMoveToBagComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  moveToCart(): void {
    alert('Item(S) yet to move');
  }
}
