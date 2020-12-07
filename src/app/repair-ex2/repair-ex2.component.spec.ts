import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairEx2Component } from './repair-ex2.component';

describe('RepairEx2Component', () => {
  let component: RepairEx2Component;
  let fixture: ComponentFixture<RepairEx2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairEx2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
