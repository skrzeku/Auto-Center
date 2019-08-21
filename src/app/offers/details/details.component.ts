import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DetailNaviComponent} from '../../shared-module/detail-navi/detail-navi.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('details_now_fixed') details_now_fixed: ElementRef;
  mydetail_element: any;
  @ViewChild('detail_navi_children') detail_navi_children: DetailNaviComponent;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.mydetail_element = this.details_now_fixed.nativeElement;
    console.log(this.mydetail_element);
  }

  @HostListener('window:scroll', ['$event'])
    CheckScroll(): void {
    const scrollPosition = window.pageYOffset;
    const detailPostition = this.mydetail_element.getBoundingClientRect().top;
    if (scrollPosition <= (detailPostition)) {
      this.detail_navi_children.fixedposition = false;
    }
    if (scrollPosition >= (detailPostition)) {
        console.log('wiecej');
        this.detail_navi_children.fixedposition = true;
    }

  }

}
