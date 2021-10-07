import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInventariosJulianaComponent } from './gestion-inventarios-juliana.component';

describe('GestionInventariosJulianaComponent', () => {
  let component: GestionInventariosJulianaComponent;
  let fixture: ComponentFixture<GestionInventariosJulianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionInventariosJulianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInventariosJulianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
