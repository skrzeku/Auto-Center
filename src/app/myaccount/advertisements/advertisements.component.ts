import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.less']
})
export class AdvertisementsComponent implements OnInit {

  amountOfCurrent: string = '';
  amountOfRecent: string = '(2)';
  category: string[] = ['Osobowe', 'Ciężarowe', 'Motocykle', 'Części'];

  constructor() { }

  ngOnInit() {
  }

}
