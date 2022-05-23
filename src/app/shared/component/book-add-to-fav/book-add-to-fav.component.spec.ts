import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddToFavComponent } from './book-add-to-fav.component';

describe('BookAddToFavComponent', () => {
  let component: BookAddToFavComponent;
  let fixture: ComponentFixture<BookAddToFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddToFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAddToFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
