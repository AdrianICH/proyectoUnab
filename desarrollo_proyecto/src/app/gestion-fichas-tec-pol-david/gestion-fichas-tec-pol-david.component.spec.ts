import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFichasTecPolDavidComponent } from './gestion-fichas-tec-pol-david.component';

describe('GestionFichasTecPolDavidComponent', () => {
  let component: GestionFichasTecPolDavidComponent;
  let fixture: ComponentFixture<GestionFichasTecPolDavidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFichasTecPolDavidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFichasTecPolDavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
