import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBookList } from './books';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss'],
})
export class BookCardsComponent implements OnInit {
  @Input()
  books!: IBookList;

  isActive = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewBookInfo(id: number): void{
   // this.router.navigate(['/book'])
  }
}
