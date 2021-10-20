import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarFichasComponent } from './filtrar-fichas.component';

describe('FiltrarFichasComponent', () => {
  let component: FiltrarFichasComponent;
  let fixture: ComponentFixture<FiltrarFichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarFichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
