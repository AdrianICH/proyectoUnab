import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFichasComponent } from './actualizar-fichas.component';

describe('ActualizarFichasComponent', () => {
  let component: ActualizarFichasComponent;
  let fixture: ComponentFixture<ActualizarFichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarFichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
