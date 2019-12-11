import { Component, OnInit } from '@angular/core';
import {trigger} from '@angular/animations';
import {fadeAnimation} from '../start/animation/fadeIntRoute';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.less'],
  animations: [fadeAnimation]
})
export class MyaccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
