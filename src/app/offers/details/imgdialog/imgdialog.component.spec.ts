import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgdialogComponent } from './imgdialog.component';

describe('ImgdialogComponent', () => {
  let component: ImgdialogComponent;
  let fixture: ComponentFixture<ImgdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
