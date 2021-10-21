import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFichasComponent } from './registrar-fichas.component';

describe('RegistrarFichasComponent', () => {
  let component: RegistrarFichasComponent;
  let fixture: ComponentFixture<RegistrarFichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarFichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
