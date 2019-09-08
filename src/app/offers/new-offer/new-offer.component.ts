import {
  AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, HostListener, OnInit, Renderer2,
  ViewChild, ViewChildren, ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/internal/operators';
import {isNumeric} from 'rxjs/internal/util/isNumeric';
import {CarsService} from '../../core-module/services/cars.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.less'],
  animations: [
    trigger('openClose', [
      transition(
        ':enter',
        [
          style({ right: '-300px', opacity: 0 }),
          animate('600ms linear',
            style({ right: 0, opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ right: 0, opacity: 1 }),
          animate('600ms linear',
            style({ right: '-300px', opacity: 0 }))
        ]
      )
    ])
  ],

})
export class NewOfferComponent implements OnInit, AfterViewInit {
  myControl = new FormControl();
  @ViewChildren('mydynamic') mydynamic: ElementRef;
  options: string[] = ['Osobowe', 'Ciężarowe', 'Motocykle', 'Części'];
  mark: string[] = ['Audi', 'BMW', 'Volkswagen', 'Opel', 'Toyota', 'Kia'];
  currency: string[] = ['PLN', 'Euro'];
  dynamic_info: boolean = false;
  mydyna: any;



  //dynamic databes for test!!
  info_db: any [] = [];


  oneinfodb: any;

  modelAudi: string[];
  filteredOptions: Observable<string[]>;

    //forms
  form: FormGroup;

  constructor(private db: CarsService,
              private rend: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
            //filling the array
            this.db.getInfoCircle().subscribe( async (lol) => {
              this.info_db = lol;
              console.log(lol);
            });

            this.filteredOptions = this.myControl.valueChanges.pipe(
              startWith(''),
              map(value => this._filter(value))
            );
  }



  ngAfterViewInit() {
  }


          private buildMyForm(): void {
            this.form = this.formBuilder.group( {
              category: '',
            colour: '',
            course: 0,
            doors: 5,
            engine_capaciy: 1000 + 'cm3',
            from: 'Osoba Prywatna',
            fuel: '',
            gearcase: '',
            id: '',
            mark: '',
            model: '',
            power: '',
            seats: 5,
            state: '',
            type: '',
            version: '',
            year: 2000,
            key: '',
            price: 0,
            deadline: '',
            premium: true,
            timeLeft: ''
              }
            );
          }


            private _filter(value: string): string[] {
              const filterValue = value.toLowerCase();

              return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
            }



                //filter db get one
        public showDynamicInfo(id: number): void {

          const oneobject = this.info_db.filter(one => one.id == id);
          this.oneinfodb = oneobject[0];

        }


@HostListener('document:click', ['$event'])

  handleClick(event: Event) {
    const target = event.target as Element;
    const id = target.id;
    const classs = target.className;
    const correctClass = 'fas fa-info-circle';
    const top = target.getBoundingClientRect().top;

        if (classs === correctClass && isNumeric(id)) {
                          //nth click
                    if(this.dynamic_info) {
                      this.dynamic_info = false;
                      setTimeout(() => {
                        this.dynamic_info = true;
                        this.showDynamicInfo(+id);
                      }, 600);
                    }
                        //First Click!!
                    else {
                      this.dynamic_info = true;
                      this.showDynamicInfo(+id);

                    }
        }
        else {
          return;
        }
    }


  closeInfo(): void {
    this.dynamic_info = false;

  }


}
