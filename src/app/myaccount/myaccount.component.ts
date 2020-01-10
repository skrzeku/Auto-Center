import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {trigger} from '@angular/animations';
import {fadeAnimation} from '../start/animation/fadeIntRoute';
import {CarsService} from '../core-module/services/cars.service';
import {Car} from '../core-module/models/car.model';
import {Router} from '@angular/router';
import {SmallModalComponent} from './small-modal/small-modal.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {HelpService} from '../core-module/services/help.service';
import {AuthorizationService} from '../core-module/services/authorization.service';
import {User} from 'firebase';
import {Client} from '../core-module/models/client.model';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.less'],
  animations: [fadeAnimation]
})
export class MyaccountComponent implements OnInit, AfterViewInit {
  cars: Car[];
  amountOfCurrent: number = 0;
  amountOfRecent: number = 0;
  booli: boolean = true;
  currentBoolean: boolean = true;
  category: string[] = ['Osobowe', 'Ciężarowe', 'Motocykle', 'Części'];
  amount: string[] = ['10', '20', '50'];
  edit_info = false;
  myuser: Client;
  info_form: FormGroup;
  clientCars: Car[];
  @ViewChild('current_li') current_li: ElementRef;
  @ViewChild('recent_li') recent_li: ElementRef;
  recentBoolean = false;

  constructor(private carsservice: CarsService,
              private router: Router,
              private dialog: MatDialog,
              private helpserv: HelpService,
              private authserv: AuthorizationService,
              private formbuilder: FormBuilder,
              private snack: MatSnackBar,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.BuildClientForm();
    this.carsservice.getCars().subscribe((cars) => {

      this.clientCars = cars;
      this.amountOfCurrent = cars.length;
    });

    this.authserv.authState$.subscribe((state) => {
      this.getOneUser(state.email);
      //this.GetUserCars(state.email);
    });

  }
  ngAfterViewInit(): void {

  }
  BuildClientForm(): void {
    this.info_form = this.formbuilder.group({
      email: '',
      password: '',
    first_name: '',
      last_name: '',
      country: '',
      adress: '',
      post_code: '',
      city: '',
    id: '',
    key: ''
    });
  }

  getOneUser(email: string): void {
    this.authserv.getUsers().subscribe((users) => {
      this.myuser = users.filter((user) => user.email === email)[0];
      this.info_form.patchValue(this.myuser);

    });
  }

  GetUserCars(email: string): void {
    this.carsservice.getCars().subscribe((cars) => {
        this.clientCars = cars.filter((car) => car.user === email);
      this.amountOfCurrent = this.clientCars.length;
    });
  }

  gotoDetails(car: Car) {
    this.carsservice.goToCarDetails(car);
  }
  goToEditCar(car: Car) {
    this.helpserv.Shareedits(true);
    this.router.navigate(['offers/new']).then(
      () => {
        this.carsservice.shareCar(car);
      }
    );
  }
  sortIt() {
    this.booli = !this.booli;
  }


  openDialog(car: Car) {
    this.dialog.open(SmallModalComponent, { data: car });
  }
  showinfoform(): void {
    this.edit_info = true;
  }
  cancelInfoForm(): void {
    this.edit_info = false;
  }
  acceptChanges(): void {
  this.info_form.controls['email'].setValue(this.myuser.email);
  this.info_form.controls['password'].setValue(this.myuser.password);
  this.info_form.controls['id'].setValue(this.myuser.id);
  this.authserv.editUser(this.myuser.key, this.info_form.value).then(() => {
    this.edit_info = false;
    this.snack.open('User was successfully edited', '', {panelClass: ['success-snack']});
  });
  }
  gotoAddCars(): void {
    this.router.navigate(['offers/new']);
  }

  chengeViews(event, bol: boolean): void {
    const el = event.target;
    const curr_el = this.current_li.nativeElement;
    const rec_el = this.recent_li.nativeElement;
    this.renderer.removeClass(curr_el, 'active' );
    this.renderer.removeClass(rec_el, 'active' );
   this.renderer.addClass(el, 'active');

    this.currentBoolean = bol;
  }


}
