import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Car} from '../../core-module/models/car.model';

@Component({
  selector: 'app-detail-navi',
  templateUrl: './detail-navi.component.html',
  styleUrls: ['./detail-navi.component.less']
})
export class DetailNaviComponent implements OnInit, AfterViewInit {


  @Input ('car') car: Car;

  visiblenumber: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }

  shownumber() {
    this.visiblenumber = !this.visiblenumber;
  }



}
