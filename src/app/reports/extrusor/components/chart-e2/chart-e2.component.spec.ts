import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartE2Component } from './chart-e2.component';

describe('ChartE2Component', () => {
  let component: ChartE2Component;
  let fixture: ComponentFixture<ChartE2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartE2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
