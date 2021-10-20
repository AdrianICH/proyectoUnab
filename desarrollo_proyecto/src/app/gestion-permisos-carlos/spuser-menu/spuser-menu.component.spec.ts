import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPUserMenuComponent } from './spuser-menu.component';

describe('SPUserMenuComponent', () => {
  let component: SPUserMenuComponent;
  let fixture: ComponentFixture<SPUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPUserMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
