import {
  AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, HostListener, OnInit, Renderer2,
  ViewChild, ViewChildren, ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/internal/operators';
import {isNumeric} from 'rxjs/internal/util/isNumeric';
import {CarsService} from '../../core-module/services/cars.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {async} from 'rxjs/internal/scheduler/async';
import {MatSnackBar} from '@angular/material';
import {Car, Image} from '../../core-module/models/car.model';

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
  progress: { percentage: number } = {percentage: 0};
  selectedFiles: FileList;
  oneSelectedFile: File;


  //dynamic databes for test!!
  info_db: any [] = [];
  carsLength: number;
  url = [];

  oneinfodb: any;

  modelAudi: string[];
  filteredOptions: Observable<string[]>;

  //forms
  form: FormGroup;
  car: Car;

  constructor(private db: CarsService,
              private rend: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private snack: MatSnackBar,
              private cd: ChangeDetectorRef,
              private carsservice: CarsService) {
  }

  ngOnInit() {
    //filling the array
    this.db.getInfoCircle().subscribe(async (lol) => {
      this.info_db = lol;
      console.log(lol);
    });
    this.LoadoneCar();




    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.buildMyForm();
    this.CheckCarsLength();
  }

  CheckCarsLength(): void {
    this.db.getCars().subscribe((val) => {
      this.carsLength = val.length;
      console.log(this.carsLength);
    });
  }


  ngAfterViewInit() {

  }


  private buildMyForm(): void {
    this.form = this.formBuilder.group({
        category: '',
        color: ['', Validators.required],
        course: [0, Validators.required],
        engine_capacity: [1000, Validators.required],
        from: 'Osoba Prywatna',    //it should be moved to the client datas!!
        fuel: ['', Validators.required],
        gearcase: ['manualna', Validators.required],
        id: '',
        mark: ['', Validators.required],
        model: ['', [Validators.required, Validators.maxLength(12)]],
        power: [0, Validators.required],
        state: ['nowy', Validators.required],
        version: ['', Validators.required],
        year: [2000, [Validators.required, Validators.max(new Date().getFullYear())]],
        key: '',
        price: [0, [Validators.required, Validators.max(999999)]],
        start_date: '',
        premium: [false, Validators.required],
        vat: [false, Validators.required],
        description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(170)]],
        bottom_checkbox: false,
      }
    );
  }

  //Send images to the storage now just one file but i have to edit it :)
  csvInputChange(event): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.length);
    for (let i = 0; i <= this.selectedFiles.length - 1; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (e: any) => { // called once readAsDataURL is completed
        const oneresult = e.target.result;
        this.url.push(oneresult);
      };
    }
  }
  addMainPhoto(event): void {
    this.oneSelectedFile = event.target.files[0];
    console.log(this.oneSelectedFile);
  }
  LoadoneCar() {
    if (this.carsservice.carSubject.value) {
      this.carsservice.carSubject.subscribe((car) => {
        this.carsservice.getCars().subscribe(() => {
          this.form.patchValue(car);
        });
      });
    }
    else return false;

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
      if (this.dynamic_info) {
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

  createCar(): void {

    const id = this.carsLength + 1;
    this.form.controls['id'].setValue(id);
    this.form.controls['start_date'].setValue(new Date());
    this.carsservice.pushFileToStorage(this.selectedFiles, this.progress, id);   //images


    this.db.addCar(this.form.value)
      .then(this.SuccesCreate.bind(this), this.ErrorCreate.bind(this));
  }

  private SuccesCreate() {
    this.snack.open('Car has been successfully created!', '', {panelClass: ['success-snack']});
  }

  private ErrorCreate(error) {
    this.snack.open(error.message, '', {panelClass: 'snack-error'});
  }

  LoadOneCar(car: Car): void {
    this.form.patchValue(car);
  }



}
