import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {Car} from '../core-module/models/car.model';
import {AuthorizationService} from '../core-module/services/authorization.service';
import {CarsService} from '../core-module/services/cars.service';
import {HelpService} from '../core-module/services/help.service';
import {Router} from '@angular/router';
declare var require;

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {

  car: Car;
  Chance = require('chance');
  BigCar: Car;
  midCars: Car[] = [];
  smallCars: Car[] = [];
  allcars: Car[];
  imgUrl = '../../assets/images/';
  marks = ['Mazda', 'Audi', 'Volkswagen', 'Kia', 'Toyota', 'BMW', 'Citroen', 'Fiat', 'Honda', 'Ford', 'Hyundai', 'Lexus', 'Mercedes', 'Nissan', 'Renault'];
  randomCars: Car[];
  types = ['Hatchback', 'Sedan', 'Wagon', 'Coupe', 'Convertible', 'Luxury', 'Pickup', 'Suv'];
  @ViewChildren('alltypes') alltypes: QueryList<ElementRef>;
  @ViewChildren('allbrands') allbrands: QueryList<ElementRef>;
  @ViewChild('main_figure') main_figure: ElementRef;
  @ViewChild('hidden_message') hidden_message: ElementRef;
  @ViewChild('contact_section') contact_section: ElementRef;
  types_button = true;
  brand_button = true;
  leftchevron_vis = false;
  rightchevron_vis = true;
  increment = 0;
  contactSent = false;





  constructor(private carsserv: CarsService,
              private helpserv: HelpService,
              private router: Router,
              private render: Renderer2) { }

  ngOnInit() {
    this.carsserv.getCars().subscribe((cars) => {
      this.chanceit(cars);
      this.allcars = cars;
      this.randomCars = cars.slice(0, 10);
    });
    console.log(this.types);

  }
  goToDetails(car: Car): void {
    this.carsserv.goToCarDetails(car);
  }
  goTopromotedCars() {
    this.router.navigate(['offers']);
    this.helpserv.PushFilterArray('premium', true, '' );

  }
  showMoreTypes() {
    this.alltypes.forEach((type) => {
      this.render.setStyle(type.nativeElement, 'display', 'inline-block');
    });
    this.types_button = false;
  }
  showMoreBrands(): void {
    this.allbrands.forEach((brand) => {
      this.render.setStyle(brand.nativeElement, 'display', 'inline-block');
    });
    this.brand_button = false;

  }


  chanceit(array): void {
    const chance = new this.Chance();
    const uniques = chance.unique(chance.natural, array.length, {min: 0, max: array.length - 1});
    for (let i = 0; i < 11; i++ ) {
      if (i < 1) {
        this.BigCar = array[uniques[i]];
      }
      else if (i < 5) {
        this.midCars.push(array[uniques[i]]);
      }
      else if (i < 11) {
        this.smallCars.push(array[uniques[i]]);
      }
    }
  }
  filterbyTypes(type: string) {
    this.router.navigate(['/offers']);
    this.helpserv.PushFilterArray('type', type, '');
  }
  filterbyBrand(brand: string) {
    this.router.navigate(['/offers']);
    this.helpserv.PushFilterArray('mark', brand, '');
  }
  slideImg(str: string): void {
    if (str === '-') {
      if (this.increment <= 1) {
        this.leftchevron_vis = false;
      }
      this.increment--;
      this.rightchevron_vis = true;
    }
    if (str === '+') {
      if (this.increment >= 2) {
        this.rightchevron_vis = false;
      }
      this.increment++;
      this.leftchevron_vis = true;
    }
    if (window.innerWidth > 991) {
      this.render.setStyle(this.main_figure.nativeElement, 'left', -(50 * this.increment) + '%');
    }
    else  {
      this.render.setStyle(this.main_figure.nativeElement, 'left', -(100 * this.increment) + '%');
    }
  }
  SendEmail(): void {
    this.contactSent = true;
    this.render.addClass(this.hidden_message.nativeElement, 'shown_message');
    setTimeout(() => {
      this.render.removeClass(this.hidden_message.nativeElement, 'shown_message');
    }, 4000);
  }
  scrolltoContact(): void {
    this.contact_section.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  gotoOffers(): void {
    this.router.navigate(['/offers']);
  }
  navigateToLogin(): void {
    this.router.navigate(['login']);
  }

}
