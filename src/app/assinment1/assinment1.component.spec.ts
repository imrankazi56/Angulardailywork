import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assinment1Component } from './assinment1.component';

describe('Assinment1Component', () => {
  let component: Assinment1Component;
  let fixture: ComponentFixture<Assinment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assinment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assinment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
