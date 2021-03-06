import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Injectable,
  OnInit,
  QueryList,
  Renderer2,
  RendererStyleFlags2,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {DetailNaviComponent} from '../../shared-module/detail-navi/detail-navi.component';
import {Car} from '../../core-module/models/car.model';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {CarsService} from '../../core-module/services/cars.service';
import * as firebase from 'firebase';
import {MatDialog} from '@angular/material';
import {ImgdialogComponent} from './imgdialog/imgdialog.component';
import {scale3dboth} from '../../start/animation/scale3dboth';
import {ContactDialogComponent} from './contact-dialog/contact-dialog.component';
import {HelpService} from '../../core-module/services/help.service';
import {AuthorizationService} from '../../core-module/services/authorization.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
  animations: [scale3dboth]
})
@Injectable()
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('details_now_fixed') details_now_fixed: ElementRef;
  mydetail_element: any;
  @ViewChild('detail_navi_children') detail_navi_children: DetailNaviComponent;
  @ViewChild('slider_wrapper') slider_wrapper: ElementRef;
  @ViewChildren('sliders') sliders: QueryList<ElementRef>;
  @ViewChild('figure') figure: ElementRef;
  @ViewChild('bigdetails') bigdetails: ElementRef;
  small_img_src = [];
  visibleLeft = false;
  visibleRight = true;
  wrapper_slider_width = 0;
  increment = 0;
  imgs_length = 0;
  bigbool = false;
  car: Car;
  key: any;
  visibleboolean: boolean = false;
  stateEmail = '';

  constructor(private activeroute: ActivatedRoute,
              private router: Router,
              private carsservice: CarsService,
              private renderer: Renderer2,
              public dialog: MatDialog,
              private helpserv: HelpService,
              private authderv: AuthorizationService) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.bigbool = true;
      }
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.LoadoneCar();
          this.bigbool = false;
        }, 200);

      }
    });
  }


  ngOnInit() {
    this.LoadoneCar();
    this.authderv.authState$.subscribe((state) => {
      if (state) {
        this.stateEmail = state.email;
      }

    });
  }
  ngAfterViewInit() {
    this.mydetail_element = this.details_now_fixed.nativeElement;
    this.getLength();
  }

  shownumber() {
    this.visibleboolean = true;

  }
  hidenumber(): void {
    this.visibleboolean = false;
  }
  getLength(): void {
    firebase.storage().ref().child('' + this.car.id + '').listAll().then((result) => {
      this.DownloadImgs(result.items.length);
      this.imgs_length = result.items.length;

    }).catch(function(error) {
      alert(error);
    });
  }
  DownloadImgs(num: number): void {
    for(let i = 0; i <= num - 1; i++) {
      const storage = firebase.storage().ref().child( '' + this.car.id + '/' + i + '.png');
      storage.getDownloadURL().then(url => {
        this.small_img_src.push(url);
        this.renderer.setStyle(this.figure.nativeElement, 'width', (num * 100) + '%');
      });
    }
    setTimeout(() => {
      this.CheckWidth(num);
    }, 300);
  }
  CheckWidth(num: number): void {
    this.wrapper_slider_width = this.slider_wrapper.nativeElement.clientWidth;
    this.sliders.forEach((slider) => {
     this.renderer.setStyle(slider.nativeElement, 'width', (100 / num) + '%');
     console.log('CheckWidth()');
    });
  }




    LoadoneCar(): void {

    //it just keep the datas sended from cars-resolve and offers.routing.module

    this.car = this.activeroute.snapshot.data['car'];
  }



  @HostListener('window:scroll', ['$event'])
    CheckScroll(): void {
    const scrollPosition = window.pageYOffset;
    const detailPostition = this.mydetail_element.getBoundingClientRect().top;
    if (scrollPosition <= (detailPostition)) {

    }
    if (scrollPosition >= (detailPostition)) {

    }
  }
  slideit(str: string): void {
    if (str === '-') {
      if (this.increment <= 1) {
      this.visibleLeft = false;
      }
      this.increment--;
      this.visibleRight = true;
    }
    if (str === '+') {
      if (this.increment >= this.sliders.length - 2) {
        this.visibleRight = false;
      }
      this.increment++;
      this.visibleLeft = true;
    }
    this.renderer.setStyle(this.figure.nativeElement, 'left', -(100 * this.increment) + '%');

  }

  showAllImages(): void {
    this.dialog.open(ImgdialogComponent , {data: this.small_img_src});
  }
  showContact(): void {
    this.dialog.open(ContactDialogComponent, {data: this.car});
  }
  goToEditCar(car: Car) {
    this.helpserv.Shareedits(true);
    this.router.navigate(['offers/new']).then(
      () => {
        this.carsservice.shareCar(car);
      }
    );
  }


}
