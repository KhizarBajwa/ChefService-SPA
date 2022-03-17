import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAChefComponent } from './register-a-chef.component';

describe('RegisterAChefComponent', () => {
  let component: RegisterAChefComponent;
  let fixture: ComponentFixture<RegisterAChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
