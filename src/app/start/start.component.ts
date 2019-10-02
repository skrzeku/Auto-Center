import { Component, OnInit } from '@angular/core';
import {Car} from '../core-module/models/car.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  car: Car;

  constructor() { }

  ngOnInit() {
  }
  goToDetails(event): void {


  }

}
