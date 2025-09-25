import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCgvConstructora } from './formulario-cgv-constructora';

describe('FormularioCgvConstructora', () => {
  let component: FormularioCgvConstructora;
  let fixture: ComponentFixture<FormularioCgvConstructora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCgvConstructora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCgvConstructora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
