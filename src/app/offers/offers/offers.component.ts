import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CarsService} from '../../core-module/services/cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core-module/models/car.model';
import {Mark} from '../../core-module/models/marks.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less']
})
export class OffersComponent implements OnInit, AfterViewInit {

  constructor(private carservice: CarsService) {}
  cars$: Observable<Car[]>;
  marks$: Observable<Mark[]>;
  siema: Observable<Mark>;





  ngOnInit() {
    this.cars$ = this.carservice.getCars();
    console.log(this.cars$);
    this.marks$ = this.carservice.getMarks();
    console.log(this.marks$);
    this.siema = this.carservice.getoneMark('1');

  }
  ngAfterViewInit () {



  }

}
