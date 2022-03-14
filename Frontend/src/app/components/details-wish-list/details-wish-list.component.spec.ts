import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWishListComponent } from './details-wish-list.component';

describe('DetailsWishListComponent', () => {
  let component: DetailsWishListComponent;
  let fixture: ComponentFixture<DetailsWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsWishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
