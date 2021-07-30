import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartE4Component } from './chart-e4.component';

describe('ChartE4Component', () => {
  let component: ChartE4Component;
  let fixture: ComponentFixture<ChartE4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartE4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartE4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
