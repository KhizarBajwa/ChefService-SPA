import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAChefComponent } from './request-achef.component';

describe('RequestAChefComponent', () => {
  let component: RequestAChefComponent;
  let fixture: ComponentFixture<RequestAChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
