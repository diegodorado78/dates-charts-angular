import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisLineSelectionComponent } from './kpis-line-selection.component';

describe('KpisLineSelectionComponent', () => {
  let component: KpisLineSelectionComponent;
  let fixture: ComponentFixture<KpisLineSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpisLineSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpisLineSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
