import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisContentComponent } from './kpis-content.component';

describe('KpisComponent', () => {
  let component: KpisContentComponent;
  let fixture: ComponentFixture<KpisContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpisContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpisContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
