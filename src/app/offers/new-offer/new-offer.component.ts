import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/internal/operators';
import {isNumeric} from 'rxjs/internal/util/isNumeric';
import {CarsService} from '../../core-module/services/cars.service';

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
  public id_number: number;


  //dynamic databes for test!!
  info_db: any [] = [];
  $infos: Observable<any[]>;


  oneinfodb: any;

  modelAudi: string[];
  filteredOptions: Observable<string[]>;

  constructor(private db: CarsService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

            //filling the array
    this.db.getInfoCircle().subscribe((lol) => {
          this.info_db = lol;
    });

    //this.checkClick();

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public showDynamicInfo(id: number): void {
    console.log(this.info_db);
    const oneobject = this.info_db.filter(one => one.id == id);
    this.oneinfodb = oneobject[0];
  }


@HostListener('document:click', ['$event'])

  handleClick(event: Event) {
    const target = event.target as Element;
    const id = target.id;
    const classs = target.className;
    const correctClass = 'fas fa-info-circle';
        if (classs === correctClass && isNumeric(id)) {
                    if(this.dynamic_info) {
                      this.dynamic_info = false;
                      setTimeout(() => {
                        this.dynamic_info = true;
                        this.showDynamicInfo(+id);
                      }, 500);
                    }
                    else {
                      this.dynamic_info = true;
                      this.showDynamicInfo(+id);
                    }
        }
        else {
          this.dynamic_info = false;
        }
    }



}
