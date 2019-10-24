import {AfterViewInit, Component, ElementRef, HostListener, Injectable, OnInit, ViewChild} from '@angular/core';
import {DetailNaviComponent} from '../../shared-module/detail-navi/detail-navi.component';
import {Car} from '../../core-module/models/car.model';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/internal/operators';
import {CarsService} from '../../core-module/services/cars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
@Injectable()
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('details_now_fixed') details_now_fixed: ElementRef;
  mydetail_element: any;
  @ViewChild('detail_navi_children') detail_navi_children: DetailNaviComponent;

  car: Car;
  key: any;
  visibleboolean: boolean = false;

  constructor(private activeroute: ActivatedRoute,
              private router: Router,
              private carsservice: CarsService) {}


  ngOnInit() {
    this.LoadoneCar();

  }
  ngAfterViewInit() {

    this.mydetail_element = this.details_now_fixed.nativeElement;
  }

  shownumber() {
    this.visibleboolean = !this.visibleboolean;
  }



    LoadoneCar(): void {

    //it just keep the datas sended from cars-resolve and offers.routing.module

    this.car = this.activeroute.snapshot.data['car'];
  }



  @HostListener('window:scroll', ['$event'])
    CheckScroll(): void {
    const scrollPosition = window.pageYOffset;
    const detailPostition = this.mydetail_element.getBoundingClientRect().top;
    if (scrollPosition <= (detailPostition)) {
      this.detail_navi_children.fixedposition = false;
    }
    if (scrollPosition >= (detailPostition)) {
        this.detail_navi_children.fixedposition = true;
    }
  }



}
