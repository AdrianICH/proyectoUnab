import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCmpnntComponent } from './default-cmpnnt.component';

describe('DefaultCmpnntComponent', () => {
  let component: DefaultCmpnntComponent;
  let fixture: ComponentFixture<DefaultCmpnntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCmpnntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCmpnntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
