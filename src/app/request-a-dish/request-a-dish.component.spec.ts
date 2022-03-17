import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestADishComponent } from './request-a-dish.component';

describe('RequestADishComponent', () => {
  let component: RequestADishComponent;
  let fixture: ComponentFixture<RequestADishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestADishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestADishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
