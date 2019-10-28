import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {buildAnimationAst} from '@angular/animations/browser/src/dsl/animation_ast_builder';
import {HelpService} from '../../../core-module/services/help.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.less']
})
export class AutomobileComponent implements OnInit {
  filteredOptions = ['lol', 'lol2'];
  model = 's';
  price_from = '';
  price_to = '';
  year_from = '';
  year_to = '';
  course_from = '';
  course_to = '';





  firstclicked: number;

  autoform: FormGroup;


  constructor(private rend: Renderer2,
              private formbuilder: FormBuilder,
              private helpserv: HelpService,
              private router: Router) { }

  ngOnInit() {
    this.buildautoform();

  }

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






  AutogoToOffers() {
    this.helpserv.array.length = 0;






    //this.helpserv.PushFilterArray('category', this.autoform.controls['category'].value, '' );
    //this.helpserv.PushFilterArray('mark', this.autoform.controls['mark'].value, '' );
    this.helpserv.PushFilterArray('model', null, null );

    this.helpserv.PushFilterArray('year', 0, 2500 );
    this.helpserv.PushFilterArray('price', 0, 99999 );

    this.helpserv.PushFilterArray('fuel', null, null );

    this.router.navigate(['offers']);
  }






  sendspan(num: number, event): void {
    this.firstclicked = num;
    const elementText = event.target.innerText;
    console.log(elementText);
  }
}
