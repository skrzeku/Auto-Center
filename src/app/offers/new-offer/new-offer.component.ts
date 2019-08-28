import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/internal/operators';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.less']
})
export class NewOfferComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Osobowe', 'Ciężarowe', 'Motocykle', 'Części'];
  mark: string[] = ['Audi', 'BMW', 'Volkswagen', 'Opel', 'Toyota', 'Kia'];
  currency: string[] = ['PLN', 'Euro'];
  dynamic_info: boolean = false;

  modelAudi: string[]
  filteredOptions: Observable<string[]>;

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }






}
