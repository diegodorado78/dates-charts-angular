import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquillaComponent } from './boquilla.component';

describe('BoquillaComponent', () => {
  let component: BoquillaComponent;
  let fixture: ComponentFixture<BoquillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoquillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
