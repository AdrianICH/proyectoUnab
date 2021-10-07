import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuarioNathaliaComponent } from './gestion-usuario-nathalia.component';

describe('GestionUsuarioNathaliaComponent', () => {
  let component: GestionUsuarioNathaliaComponent;
  let fixture: ComponentFixture<GestionUsuarioNathaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUsuarioNathaliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuarioNathaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
