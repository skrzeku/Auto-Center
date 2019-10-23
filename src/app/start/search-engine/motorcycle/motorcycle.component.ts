import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.less']
})
export class MotorcycleComponent implements OnInit {
  filteredOptions = ['lol', 'lol2'];

  constructor() { }

  ngOnInit() {
  }

}
