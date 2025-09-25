import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraVistas } from './barra-vistas';

describe('BarraVistas', () => {
  let component: BarraVistas;
  let fixture: ComponentFixture<BarraVistas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraVistas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraVistas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
