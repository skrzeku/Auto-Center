import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {HelpService} from '../services/help.service';
import {AuthorizationService} from '../services/authorization.service';
import {NavigationEnd, Router} from '@angular/router';
import {widtheight} from '../../start/animation/widthandheight';
import {animate, style, transition, trigger} from '@angular/animations';
import {Car} from '../models/car.model';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  animations: [ trigger('width', [
    transition('void => *', [
      style({   width: '0', opacity: '0'}),
      animate('0.3s ease', style({   width: '*', opacity: '1'  }))
    ]),
    transition('* => void', [
      style({ width: '*', opacity: '1'}),
      animate('0.3s ease', style({  width: '0', opacity: '0'  }))
    ])
  ])]
})
export class NavigationComponent implements OnInit, AfterViewInit {

  Shownnavi: boolean;
  @Output() showoutput = new EventEmitter<boolean>();
  @ViewChild('nav') nav: ElementRef;
  visibleSearch = false;
  lol = '';
  searches = 'hiho';
  inputvalue = '';

  @Input() cars: Car[];

  mynav: any;
  bool;


  constructor(private rend: Renderer2,
              private helpservice: HelpService,
              private authserv: AuthorizationService,
              private router: Router,
              private carsservice: CarsService) {
  }

  ngOnInit() {
    this.authserv.authState$.subscribe((auth) => {
      this.bool = auth;
      console.log(this.bool);
    });


  }
  ngAfterViewInit () {
    this.mynav = this.nav.nativeElement;
  }

  sendOutput(): void {
   //this.Shownnavi = true;
    //this.showoutput.emit(this.Shownnavi);   //by using outputs
    this.helpservice.shareCloseValue(true);
  }
  singOut() {
    this.authserv.logout()
      .then(val => this.router.navigate(['/login']));

  }
  LoginorMyAccount() {

    // guard will redirect it To login if user has no authorization
    this.router.navigate(['myaccount']);
  }


  showSearchForm(): void {
    this.visibleSearch = !this.visibleSearch;

    this.inputvalue = '';
    this.searches = 'hipot';
  }
  checkSearch(e): void {
    this.searches = 'hiho';
        if (e.length >= 3) {
        this.searches = e;
        }
  }

@HostListener('document:click', ['$event.target'])
  CheckOutsideClick(target) {
    if (!target.closest('#search_input') && (!target.closest('#show_search_icon')) && (!target.closest('.searches_car'))) {
    this.visibleSearch = false;
    this.searches = 'hipot';
    }
}

  navigatetoCar(car: Car) {
    this.carsservice.goToCarDetails(car);
    this.visibleSearch = false;
    this.searches = 'hipot';

  }






}
