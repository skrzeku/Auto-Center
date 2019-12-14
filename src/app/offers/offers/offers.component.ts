import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {CarsService} from '../../core-module/services/cars.service';
import {Observable, range} from 'rxjs';
import {Car} from '../../core-module/models/car.model';

import {Router} from '@angular/router';
import {Filter} from '../../core-module/models/filter.model';
import {HelpService} from '../../core-module/services/help.service';
import {scale3dboth} from '../../start/animation/scale3dboth';
import {widtheight} from '../../start/animation/widthandheight';
declare var require;

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less'],
  animations: [widtheight, scale3dboth]
})
export class OffersComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private carservice: CarsService,
              private router: Router,
              private helpserv: HelpService,
              private render: Renderer2) {}
  cars$: Observable<Car[]>;

  deadline: any;
  maps: any;
  carse: Car [];
  selectedValue: string;

  number = [0,1,2,3,4,5,6,7,8,9,10];

  min = 0;
  max = 99999;
  range = [0, 99999];
  course_range = [0, 999999];
  year_range = [1850, 2019];
  states: string[] = ['Nowy', 'Używany', 'Wszystkie'];
  models: string[] = ['BMW', 'Mazda', 'Toyota', 'Audi'];
  modeModel = '';
  stateModel1 = '';
  markModel1 = '';
  showfilter = false;
  sorts = ['Najnowsze', 'Cena rosnąco', 'Cena malejąco', 'Najniższy przebieg', 'Najwyższy przebieg'];
  marks$;
  markModel = '';
  stateModel = '';
  mybo = false;
  valuetwo: any;
  valueone: any;
  mybools = [false, false, false];
  queryArray = [];
  filters: Filter[] = this.helpserv.array;
  filter_number = 0;
  @ViewChildren('topfilters') topfilters: QueryList<ElementRef>;
  @ViewChildren('carselement') carselement: QueryList<ElementRef>;
  sortby = 0;
  @ViewChild('rangeslider') rangeslider: any;
  range1 = [0, 99999];
  course_range1 = [0, 999999];
  year_range1 = [1850, 2019];






  ngOnInit() {

    this.carservice.getCars().subscribe((carse) => {
      this.carse = carse;
      const mapprice = carse.map(car => car.price);
      this.max = Math.max(...mapprice);
      this.min = Math.min(...mapprice);
      this.range = [this.min, this.max];
      this.range1 = [this.min, this.max];
      this.SortfromNewest();
    });
    this.marks$ = this.helpserv.marks$;







  }
  ngOnDestroy() {
    this.helpserv.array.length = 0;
  }






  ngAfterViewInit () {
   this.queryArray = this.topfilters.toArray();




  }
  Sortfromlower (): void {
    this.carse.sort((a, b) => {
      return a.price - b.price;
    });

  }
  Sortfromhigher (): void {
    this.AddsortAnimation();
    this.carse.sort((a, b) => {
      return b.price - a.price;
    });
  }
  SortfromNewest (): void {
    this.AddsortAnimation();
    this.carse.sort((a, b) => {
      return b.id - a.id;
    });
  }
  sorthighestcourse (): void {
    this.AddsortAnimation();
    this.carse.sort((a, b) => {
      return b.course - a.course;
    });
  }
  sortlowestcourse (): void {
    this.AddsortAnimation();
    this.carse.sort((a, b) => {
      return a.course - b.course;
    });
  }

  SortResults () {
    this.carse.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      } else if(a.id > b.id) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  gotoDetails(car: Car) {
    this.carservice.goToCarDetails(car);
  }


  showfilters(str: string) {

      if (str === 'show') {
        this.showfilter = true;
      }
      if (str === 'hide') {
        this.showfilter = false;
      }
  }
  hiefilter(event) {
    const targetClass = event.target.classList;
    if (targetClass.contains('left_offers_top'))  {
      this.showfilter = false;
    }
    return false;
  }

  @HostListener('document:click', ['$event.target'])
  private checkClick(target) {
    if (target.closest('.one_medium_inside')) {
      target = target.closest('.one_medium_inside');
      const id = target.id;
      this.filter_number = id;

    }
    if ((!target.closest('.hidden_filter') && !target.closest('.one_medium_inside')) || target.closest('.close_hidden_btn')) {
      this.filter_number = 0;
    }
  }

  dataChanged(e) {
    if (e === 0) {
      this.SortfromNewest();
    }
    if (e === 1) {
      this.Sortfromlower();
    }
    if (e === 2) {
      this.Sortfromhigher();
    }
    if (e === 3) {
      this.sortlowestcourse();
    }
    if (e === 4) {
      this.sorthighestcourse();


    }
  }

  AddsortAnimation() {
    this.mybo = true;
    setTimeout(() => {
      this.mybo = false;
    }, 300);
  }
  Checkfields(modelvalue) {

    if (modelvalue === '' || modelvalue === 'Wszystkie') {
      this.valueone = '';
      this.valuetwo = null;
    }
    else  {
      this.valueone = modelvalue;
      this.valuetwo = '';
    }

  }
  fillFilterArray(price: string, year: string, course: string, state: string, mark: string, model: string): void {
    this.helpserv.array.length = 0;
   this.helpserv.PushFilterArray('price', price[0], price[1]);
   this.helpserv.PushFilterArray('year', year[0], year[1]);
   this.helpserv.PushFilterArray('course', course[0], course[1]);
   this.Checkfields(state);
   this.helpserv.PushFilterArray('state', this.valueone.toLowerCase(), this.valuetwo);
    this.Checkfields(mark);
    this.helpserv.PushFilterArray('mark', this.valueone, this.valuetwo);
    this.Checkfields(model);
    this.helpserv.PushFilterArray('model', this.valueone, this.valuetwo);

    this.showfilter = false;
  }
  fillMobileArray(): void {

  }

  setValues(arr: number) {
    this.mybools[arr] = true;
    this.filter_number = 0;
  }
  closeValues(arr: number): void {
    this.mybools[arr] = false;
    this.filter_number = 0;
  }
  clearValues(what: number[], num: number, min: number, max: number): void {
    this.filter_number = 0;
    what[0] = min;
    what[1] = max;
    this.mybools[num] = false;
  }





        //it will be important but letter :P
  countDate(): void {
    this.cars$.subscribe((cars) => {
      this.maps = cars;
      this.deadline = this.maps[1];
      //console.log(this.deadline);
      const lol = this.deadline.deadline;
      const date = new Date(lol).getTime();
      //console.log(date);
    });
  }










}
