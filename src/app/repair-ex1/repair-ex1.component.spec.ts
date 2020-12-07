import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairEx1Component } from './repair-ex1.component';

describe('RepairEx1Component', () => {
  let component: RepairEx1Component;
  let fixture: ComponentFixture<RepairEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
