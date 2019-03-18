import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNaviComponent } from './detail-navi.component';

describe('DetailNaviComponent', () => {
  let component: DetailNaviComponent;
  let fixture: ComponentFixture<DetailNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
