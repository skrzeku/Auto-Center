import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueOneComponent } from './blue-one.component';

describe('BlueOneComponent', () => {
  let component: BlueOneComponent;
  let fixture: ComponentFixture<BlueOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
