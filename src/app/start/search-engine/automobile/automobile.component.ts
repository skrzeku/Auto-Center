import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {buildAnimationAst} from '@angular/animations/browser/src/dsl/animation_ast_builder';
import {HelpService} from '../../../core-module/services/help.service';
import {Router} from '@angular/router';
import {CarsService} from '../../../core-module/services/cars.service';
import {Car} from '../../../core-module/models/car.model';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.less']
})
export class AutomobileComponent implements OnInit {
  filteredOptions = ['lol', 'lol2'];
  model = '';
  category = 'Osobowe';
  mark = '';
  price_from = 0;
  price_to = 999999;
  year_from = 0;
  year_to = 2020;
  course_from = 0;
  course_to = 999999;
  myformarray = [];
  valuetwo: any;
  marks$: any;
  correct_models: any;

  cars: Car[];





  firstclicked: number;

  autoform: FormGroup;


  constructor(private rend: Renderer2,
              private formbuilder: FormBuilder,
              private helpserv: HelpService,
              private router: Router,
              private carservice: CarsService) { }

  ngOnInit() {
    //this.buildautoform();
    this.carservice.getCars().subscribe((val) => {
      this.cars = val;
    });

    this.marks$ = this.helpserv.marks$;
  }
/*
 private buildautoform() {
    this.autoform = this.formbuilder.group({
      category: 'Osobowe',
      mark: '',
      model: '',
      price_from: '',
      price_to: '',
      year_from: '',
      year_to: '',
      course_from: '',
      course_to: ''
    });
  }
*/

  Checkfields(modelvalue) {
    if (modelvalue === '') {
    this.valuetwo = null;
    }
    else  this.valuetwo = '';
  }

  checkmark(mark) {
    const models = this.cars.filter(car => car.mark === mark);
    const lol = models.map(car => car.model);
    this.correct_models = lol;
  }



  AutogoToOffers() {
    this.helpserv.array.length = 0;
    const mapprice = this.cars.map(car => car.price);
    const maxprice = Math.max(...mapprice);
    const minprice = Math.min(...mapprice);
      //mark
    this.Checkfields(this.mark);
    this.helpserv.PushFilterArray('mark', this.mark, this.valuetwo);
        //model
    this.Checkfields(this.model);
    this.helpserv.PushFilterArray('model', this.model, this.valuetwo  );
        //price
    this.helpserv.PushFilterArray('price', this.price_from || minprice  , this.price_to || maxprice);

      //year
    this.helpserv.PushFilterArray('year', this.year_from || 0, this.price_to || 2500);

      //course
    this.helpserv.PushFilterArray('course', this.course_from || 0, this.course_to || 9999999);


    this.router.navigate(['offers']);
  }






  sendspan(num: number, event): void {
    this.firstclicked = num;
    const elementText = event.target.innerText;
    console.log(elementText);
  }
  Checkmodel(model) {
    console.log(model);
  }
}
