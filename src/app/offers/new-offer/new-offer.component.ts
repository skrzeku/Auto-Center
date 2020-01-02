import {
  AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, HostListener, OnInit, Renderer2,
  ViewChild, ViewChildren, ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, range} from 'rxjs';
import {map, startWith} from 'rxjs/internal/operators';
import {isNumeric} from 'rxjs/internal/util/isNumeric';
import {CarsService} from '../../core-module/services/cars.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {async} from 'rxjs/internal/scheduler/async';
import {MatSnackBar} from '@angular/material';
import {Car, Image} from '../../core-module/models/car.model';
import {HelpService} from '../../core-module/services/help.service';
import {rS} from '@angular/core/src/render3';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

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

  @ViewChildren('mydynamic') mydynamic: ElementRef;
  dynamic_info: boolean = false;
  progress: { percentage: number } = {percentage: 0};
  selectedFiles: FileList = null;
  oneSelectedFile: File;
 marks = ['Mazda', 'Audi', 'Volkswagen', 'Kia', 'Toyota', 'BMW', 'Citroen', 'Fiat', 'Honda', 'Ford', 'Hyundai', 'Lexus', 'Mercedes', 'Nissan', 'Renault'];
  models = [];
  colors = ['White', 'Black', 'Blue', 'Silver', 'Gray', 'Red', 'Green', 'Yellow'];
  types = ['Hatchback', 'Sedan', 'Wagon', 'Coupe', 'Convertible', 'Luxury', 'Pickup', 'Suv'];
  fuels = ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'LPG'];
  countries = ['Poland', 'Germany', 'France', 'UK', 'USA', 'Russia', 'Belgium', 'Netherlands', 'Other'];
  carse: Car[];
  mysrc;
  storageRef;


  //dynamic databes for test!!
  info_db: any [] = [];
  carsLength: number;
  url = [];
  mainUrl: any = null;
  years = [];

  oneinfodb: any;


  //forms
  form: FormGroup;
  car: Car;

  constructor(private db: CarsService,
              private rend: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private snack: MatSnackBar,
              private cd: ChangeDetectorRef,
              private carsservice: CarsService,
              private helpservice: HelpService,
              private router: Router) {
  }

  ngOnInit() {
    //filling the array
    this.db.getInfoCircle().subscribe(async (lol) => {
      this.info_db = lol;
      console.log(lol);
    });

    this.LoadoneCar();
    this.buildMyForm();
    this.CheckCarsLength();
    this.iterationofyears();

  }


  CheckCarsLength(): void {
    this.db.getCars().subscribe((val) => {
      this.carsLength = val.length;
    });
  }


  ngAfterViewInit() {
  this.carsservice.getCars().subscribe((cars) => {
    if (cars) {
      this.carse = cars;

    }
  });

    this.storageRef = firebase.storage().ref().child('Zrzut ekranu 2019-09-11 o 13.30.10.png');
    this.storageRef.getDownloadURL().then(url => console.log(url) );
  }





  private buildMyForm(): void {
    this.form = this.formBuilder.group({
        color: ['', Validators.required],
        course: [0, [Validators.required, Validators.min(0)]],
        engine_capacity: [1000, [Validators.required, Validators.min(0)]],
        from: 'Poland',    //it should be moved to the client datas!!
        fuel: ['', Validators.required],
        gearcase: ['Manual', Validators.required],
        id: '',
      shortdescription: ['', [Validators.required, Validators.maxLength(50)]],
        mark: ['', Validators.required],
        model: ['', [Validators.required, Validators.maxLength(12)]],
        power: [0, [Validators.required, Validators.min(0)]],
        state: ['New', Validators.required],
        version: '',
        year: [2010, Validators.required],
        key: '',
        price: [0, [Validators.required, Validators.min(0), Validators.max(999999)]],
        start_date: '',
        premium: [false, Validators.required],
        vat: [false, Validators.required],
        description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(170)]],
        bottom_checkbox: false,
      type: ['', Validators.required]
      }
    );
  }

  //Send images to the storage now just one file but i have to edit it :)
  csvInputChange(event): void {
    this.url.length = 0;
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles.length);
    for (let i = 0; i <= this.selectedFiles.length - 1; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (e: any) => { // called once readAsDataURL is completed
        const oneresult = e.target.result;
        this.url.push(oneresult);
        console.log(oneresult);
      };
    }
  }
  addMainPhoto(event): void {
    this.oneSelectedFile = event.target.files[0];
    const reader = new FileReader();
    const read = reader.readAsDataURL(this.oneSelectedFile);
    reader.onload = (e: any) => {
      this.mainUrl = e.target.result;
    };
    console.log(read);
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

    const id_cor = this.carse.map((car) => car.id)
      .reduce((prev, current) => {
        return (prev > current) ? prev : current;
      });

    this.form.controls['id'].setValue(id_cor + 1);
    this.form.controls['start_date'].setValue(new Date());
    this.carsservice.pushMaintoStorage(this.oneSelectedFile, this.progress, id_cor + 1);
    this.carsservice.pushFileToStorage(this.selectedFiles, this.progress, id_cor + 1);   //images


    this.db.addCar(this.form.value)
      .then(this.SuccesCreate.bind(this), this.ErrorCreate.bind(this));
  }

  private SuccesCreate() {
    this.router.navigate(['main']);
    this.snack.open('Car has been successfully created!', '', {panelClass: ['success-snack']});
  }

  private ErrorCreate(error) {
    this.snack.open(error.message, '', {panelClass: 'snack-error'});
  }

  LoadOneCar(car: Car): void {
    this.form.patchValue(car);
  }
  iterationofyears() {
    for (let i = 2020; i > 1950; i--) {
      this.years.push(i);

    }
  }
  checkmark() {
    const mark = this.form.controls['mark'].value;
    const models = this.carse.filter(car => car.mark === mark);
    const lol = models.map(car => car.model);
    this.models = Array.from(new Set(lol));
  }
  testfunc() {
  console.log(this.selectedFiles);

  }



}
