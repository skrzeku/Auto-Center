import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileComponent } from './automobile.component';

describe('AutomobileComponent', () => {
  let component: AutomobileComponent;
  let fixture: ComponentFixture<AutomobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
