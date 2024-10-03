import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaConsultaComponent } from './empresa-consulta.component';

describe('EmpresaConsultaComponent', () => {
  let component: EmpresaConsultaComponent;
  let fixture: ComponentFixture<EmpresaConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaConsultaComponent]
    });
    fixture = TestBed.createComponent(EmpresaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
