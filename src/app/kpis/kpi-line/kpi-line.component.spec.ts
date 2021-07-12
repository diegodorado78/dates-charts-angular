import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiLineComponent } from './kpi-line.component';

describe('KpiLineComponent', () => {
  let component: KpiLineComponent;
  let fixture: ComponentFixture<KpiLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
