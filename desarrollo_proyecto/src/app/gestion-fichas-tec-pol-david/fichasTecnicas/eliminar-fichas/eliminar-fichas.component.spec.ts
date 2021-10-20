import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarFichasComponent } from './eliminar-fichas.component';

describe('EliminarFichasComponent', () => {
  let component: EliminarFichasComponent;
  let fixture: ComponentFixture<EliminarFichasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarFichasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarFichasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
