import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPermisosCarlosComponent } from './gestion-permisos-carlos.component';

describe('GestionPermisosCarlosComponent', () => {
  let component: GestionPermisosCarlosComponent;
  let fixture: ComponentFixture<GestionPermisosCarlosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPermisosCarlosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPermisosCarlosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
