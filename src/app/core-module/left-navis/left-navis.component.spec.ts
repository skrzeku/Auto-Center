import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavisComponent } from './left-navis.component';

describe('LeftNavisComponent', () => {
  let component: LeftNavisComponent;
  let fixture: ComponentFixture<LeftNavisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
