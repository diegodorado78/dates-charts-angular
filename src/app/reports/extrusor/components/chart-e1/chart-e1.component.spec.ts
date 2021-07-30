import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartE1Component } from './chart-e1.component';

describe('Chart1Component', () => {
  let component: ChartE1Component;
  let fixture: ComponentFixture<ChartE1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartE1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
