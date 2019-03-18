import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarComponent } from './main-car.component';

describe('MainCarComponent', () => {
  let component: MainCarComponent;
  let fixture: ComponentFixture<MainCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
