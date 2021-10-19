import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcederPermisosComponent } from './conceder-permisos.component';

describe('ConcederPermisosComponent', () => {
  let component: ConcederPermisosComponent;
  let fixture: ComponentFixture<ConcederPermisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcederPermisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcederPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
