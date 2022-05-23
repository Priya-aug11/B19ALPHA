import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookstoreService } from 'src/app/service/bookstore.service';
import { IBookList } from '../book-cards/books';

@Component({
  selector: 'app-show-similar-items',
  templateUrl: './show-similar-items.component.html',
  styleUrls: ['./show-similar-items.component.scss']
})
export class ShowSimilarItemsComponent implements OnInit {
  @Input()
  bookId: number | undefined;

  SimilarBook$: Observable<IBookList[]> | undefined;
  constructor(private bookService: BookstoreService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.bookId = +params['id'];
        this.loadSimilarItems();
      }
    );
  }
  loadSimilarItems() {
    this.SimilarBook$ = this.bookService.showSimilarItems(Number(this.bookId))
  }

}
