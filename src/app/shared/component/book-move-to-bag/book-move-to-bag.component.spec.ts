import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMoveToBagComponent } from './book-move-to-bag.component';

describe('BookMoveToBagComponent', () => {
  let component: BookMoveToBagComponent;
  let fixture: ComponentFixture<BookMoveToBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMoveToBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMoveToBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
