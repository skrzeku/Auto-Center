import {AfterViewInit, Component, ElementRef, HostListener, Injectable, OnInit, ViewChild} from '@angular/core';
import {DetailNaviComponent} from '../../shared-module/detail-navi/detail-navi.component';
import {Car} from '../../core-module/models/car.model';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/internal/operators';
import {CarsService} from '../../core-module/services/cars.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
@Injectable()
export class DetailsComponent implements OnInit, AfterViewInit {
  @ViewChild('details_now_fixed') details_now_fixed: ElementRef;
  mydetail_element: any;
  @ViewChild('detail_navi_children') detail_navi_children: DetailNaviComponent;
  smallimages = [];
  small_img_src = [];
  storageRef;
  imgslength = 0;


  car: Car;
  key: any;
  visibleboolean: boolean = false;

  constructor(private activeroute: ActivatedRoute,
              private router: Router,
              private carsservice: CarsService) {}


  ngOnInit() {
    this.LoadoneCar();

  }
  ngAfterViewInit() {

    this.mydetail_element = this.details_now_fixed.nativeElement;
    this.getLength();

  }

  shownumber() {
    this.visibleboolean = !this.visibleboolean;
  }
  getLength(): void {
    firebase.storage().ref().child('21').listAll().then((result) => {
      this.DownloadImgs(result.items.length);
    }).catch(function(error) {
      alert(error);
    });
  }
  DownloadImgs(num: number): void {
    for(let i = 0; i <= num - 1; i++) {
      const storage = firebase.storage().ref().child('21/' + i + '.png');
      storage.getDownloadURL().then(url => {
        this.small_img_src.push(url);
      });
    }
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
      this.detail_navi_children.fixedposition = false;
    }
    if (scrollPosition >= (detailPostition)) {
        this.detail_navi_children.fixedposition = true;
    }
  }



}
