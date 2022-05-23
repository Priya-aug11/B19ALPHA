import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandiingpageComponent } from './landiingpage.component';

describe('LandiingpageComponent', () => {
  let component: LandiingpageComponent;
  let fixture: ComponentFixture<LandiingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandiingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandiingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
