import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartE3Component } from './chart-e3.component';

describe('ChartE3Component', () => {
  let component: ChartE3Component;
  let fixture: ComponentFixture<ChartE3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartE3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartE3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
