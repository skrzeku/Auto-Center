import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavigationComponent} from './core-module/navigation/navigation.component';
import {HelpService} from './core-module/services/help.service';
import {fadeAnimation} from './start/animation/fadeIntRoute';
import {CarsService} from './core-module/services/cars.service';
import {Car} from './core-module/models/car.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  constructor (private rend: Renderer2,
               private helpservice: HelpService,
               private carsserv: CarsService) {}

  shownnaviboolean: boolean = false;
  allcars: Car[] = [];
  mapofMark: any;
  reducedmark = [];

  @ViewChild('navichild') navichild: NavigationComponent;
  @Input() shownnavis: boolean;
  @ViewChild('insideElement') insideElement: ElementRef;
  @ViewChild('navig') navig: ElementRef;



  ngOnInit(): void {
  this.carsserv.getCars().subscribe((cars) => {
    this.allcars = cars;
    this.mapCars();
  });
  }

  ngAfterViewInit() {
    this.helpservice.mybol$.subscribe((val) =>{
      this.shownnaviboolean = val;
    });

  }
  mapCars(): void {
    this.mapofMark = this.allcars.map(car => car.mark);
    this.reduceMapValues(this.mapofMark);
  }

  reduceMapValues(array: any) {
    this.reducedmark = Array.from(new Set(array));
    this.reducedmark.push('Wszystkie');
    this.helpservice.ShareMarks(this.reducedmark);
  }

  ShareallCars(cars: Car[]) {

  }


  Hideleftnavi($event): void {
    this.shownnaviboolean = false;
    if (this.shownnaviboolean) {
      $event.stopPropagation();
      $event.preventDefault();
    }
    else return;
  }

}
