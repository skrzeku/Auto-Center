import {
  AfterViewInit, Component, ComponentRef, ContentChild, ElementRef, HostListener, OnInit, Renderer2, ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {Router} from '@angular/router';

import {HelpService} from '../../core-module/services/help.service';
import {fadeAnimation} from '../animation/fadeIntRoute';
import {CarsService} from '../../core-module/services/cars.service';
import {Car} from '../../core-module/models/car.model';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.less'],
  animations: [fadeAnimation]
})
export class SearchEngineComponent implements OnInit, AfterViewInit {

  @ViewChild('movedspan') movedspan: ElementRef;
  @ViewChild('firstspan') firstspan: ElementRef;
  @ViewChild('fuelmoved') fuelmoved: ElementRef;
  @ViewChild('firstfuel') firstfuel: ElementRef;
  icon: any = '<i class="fas fa-bible"></i>';
  showUlBool: boolean = false;
  firstclicked = 1;
  fuel = 1;
  model = '';
  mark = '';
  price_from ;
  price_to;
  year_from;
  year_to;
  marks$;
  cars: Car[];
  correct_models;
  valuetwo: any;
  stateText = 'All';
  fuelText = 'All';
  valueone: any;



  constructor(private rend: Renderer2,
              private router: Router,
              private helpserv: HelpService,
              private carservice: CarsService) {
  }

  ngOnInit() {
    this.carservice.getCars().subscribe((val) => {
      this.cars = val;
    });
    this.marks$ = this.helpserv.marks$;

  }
  ngAfterViewInit() {
    //by default
    const left = this.firstspan.nativeElement.offsetLeft;
    const fuelleft = this.firstfuel.nativeElement.offsetLeft;
    this.rend.setStyle(this.movedspan.nativeElement, 'left', left + 'px');

  }








            //It works good to use it later
  @HostListener('document:click', ['$event'])
  CheckClickOutside(event) {
    let targetElement = event.target as Element;
    if (!targetElement.matches('#drop-a')) {
      targetElement = targetElement.closest('#drop-a') as Element;
    }
    if (targetElement) {
      this.showUlBool = !this.showUlBool;
    }
    else {
      this.showUlBool = false;
    }
  }

  sendspan(num: number, event) {

      this.firstclicked = num;
      this.stateText = event.target.innerText;
      console.log(this.stateText);
      const left = event.target.offsetLeft;
      this.rend.setStyle(this.movedspan.nativeElement, 'left', left + 'px');


  }
  sendfuel(num: number, event): void {
    this.fuel = num;
    this.fuelText = event.target.innerText;


  }
  checkmark(mark):void {
    const models = this.cars.filter(car => car.mark === mark);
    const lol = models.map(car => car.model);
    this.correct_models = lol;
  }

  Checkfields2(modelvalue) {
    if (modelvalue === '' || modelvalue === 'All') {
      this.valueone = '';
      this.valuetwo = null;
    }
    else  {
      this.valueone = modelvalue;
      this.valuetwo = '';
    }
  }


  AutogoToOffers() {
    this.helpserv.array.length = 0;
    const mapprice = this.cars.map(car => car.price);
    const maxprice = Math.max(...mapprice);
    const minprice = Math.min(...mapprice);
    //mark
    this.Checkfields2(this.mark);
    this.helpserv.PushFilterArray('mark', this.valueone, this.valuetwo);
    //model
    this.Checkfields2(this.model);
    this.helpserv.PushFilterArray('model', this.valueone, this.valuetwo  );
    //price
    this.helpserv.PushFilterArray('price', this.price_from || minprice  , this.price_to || maxprice);

    //year
    this.helpserv.PushFilterArray('year', this.year_from || 0, this.year_to || 2500);

    //state add it after complete databese
   this.Checkfields2(this.stateText);
    this.helpserv.PushFilterArray('state', this.valueone, this.valuetwo);
    //this.helpserv.PushFilterArray('state', this.stateText.toLowerCase(), '');
    this.Checkfields2(this.fuelText);
    this.helpserv.PushFilterArray('fuel', this.valueone, this.valuetwo);

    this.router.navigate(['offers']);
  }



}
