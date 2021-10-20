import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCPComponent } from './login-cp.component';

describe('LoginCPComponent', () => {
  let component: LoginCPComponent;
  let fixture: ComponentFixture<LoginCPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
