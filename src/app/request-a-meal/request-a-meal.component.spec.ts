import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAMealComponent } from './request-a-meal.component';

describe('RequestAMealComponent', () => {
  let component: RequestAMealComponent;
  let fixture: ComponentFixture<RequestAMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
