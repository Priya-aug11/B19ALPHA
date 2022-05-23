import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSimilarItemsComponent } from './show-similar-items.component';

describe('ShowSimilarItemsComponent', () => {
  let component: ShowSimilarItemsComponent;
  let fixture: ComponentFixture<ShowSimilarItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSimilarItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSimilarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
