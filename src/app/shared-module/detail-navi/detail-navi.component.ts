import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-detail-navi',
  templateUrl: './detail-navi.component.html',
  styleUrls: ['./detail-navi.component.less']
})
export class DetailNaviComponent implements OnInit, AfterViewInit {


  fixedposition: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

  }



}
