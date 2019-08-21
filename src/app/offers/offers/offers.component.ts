import { Component, OnInit } from '@angular/core';
import {CarsService} from '../../core-module/services/cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core-module/models/car.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less']
})
export class OffersComponent implements OnInit {

  constructor(private carservice: CarsService) { }
      cars$: Observable<Car[]> = this.carservice.getCars();


  ngOnInit() {
  }

}
