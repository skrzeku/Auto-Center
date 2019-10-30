import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../../core-module/services/cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core-module/models/car.model';
import {Mark} from '../../core-module/models/marks.model';
import {map} from 'rxjs/internal/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Filter} from '../../core-module/models/filter.model';
import {HelpService} from '../../core-module/services/help.service';
declare var require;

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less']
})
export class OffersComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private carservice: CarsService,
              private router: Router,
              private helpserv: HelpService) {}
  cars$: Observable<Car[]>;

  deadline: any;
  maps: any;
  carse: Car [];
  selectedValue: string;
  lastNumber = 0;
  number = [0,1,2,3,4,5,6,7,8,9,10];
  Chance = require('chance');
  stepRange;
  min = 0;
  max = 99999;
  range = [0, 99999];
  course_range = [0, 999999];
  year_range = [1850, 2019];
  categories: string[] = ['Osobowe', 'Ciężarowe', 'Motocykle', 'Części'];
  models: string[] = ['BMW', 'Mazda', 'Toyota', 'Audi'];
  selectedModel: string;

  filters: Filter[] = this.helpserv.array;





  ngOnInit() {
    //this.cars$ = this.carservice.getCars();
    this.carservice.getCars().subscribe((carse) => {
      this.carse = carse;
      this.voidnew(carse);
    });



  }
  ngOnDestroy() {
    this.helpserv.array.length = 0;
  }






  ngAfterViewInit () {


  }
      // it works!! :D
 pushtoArray() {
    this.filters.push({
      name: 'price',
      value: 20,
      value2: 30000
    },
      {
        name: 'mark',
        value: 'Mazda',
        value2: ''
      });
 }

  gotoDetails(car: Car) {
    this.carservice.goToCarDetails(car);
  }



  getNumber(): void {
    if (0 === this.number.length) {
      alert('Finish');
    } else {
      const index = Math.floor(Math.random() * this.number.length);
      console.log(this.number[index]);
      this.number.splice(index, 1);
    }
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


    voidnew(array): void {
    const chance = new this.Chance();
    const uniques = chance.unique(chance.natural, array.length, {min: 0, max: array.length - 1});
        for (let i = 0; i < array.length; i++ ) {
          //console.log(array[uniques[i]]);
        }
    }









}
