import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInfo } from './tabla-info';

describe('TablaInfo', () => {
  let component: TablaInfo;
  let fixture: ComponentFixture<TablaInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
