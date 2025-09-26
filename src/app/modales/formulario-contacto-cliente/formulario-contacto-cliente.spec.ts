import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContactoCliente } from './formulario-contacto-cliente';

describe('FormularioContactoCliente', () => {
  let component: FormularioContactoCliente;
  let fixture: ComponentFixture<FormularioContactoCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioContactoCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioContactoCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
