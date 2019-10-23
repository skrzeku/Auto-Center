import {Component, HostListener, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {text} from '@angular/core/src/render3/instructions';
import {map, startWith, tap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import * as $ from 'jQuery';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.less'],
  animations: [
  ]
})
export class SearchEngineComponent implements OnInit {


  motocykleboolean: boolean = false;
  myControl = new FormControl();
  osoboweBoolean: boolean = true;
  partsboolean: boolean = false;
  icon: any = '<i class="fas fa-bible"></i>';
  showUlBool: boolean = false;
  options: any[] = [
    {
      name: 'Osobowe',
      path: '/main',
      icon: 'fa-car'
    },
    {
      name: 'Części',
      path: 'parts',
      icon: 'fa-tools'

    },
    {
      name: 'Motocykle',
      path: 'motorcycle',
      icon: 'fa-motorcycle'
    }
  ];
  filteredOptions: Observable<string[]>;
  tap: number;


  constructor(private rend: Renderer2,
              private router: Router) {
  }

  ngOnInit() {
    this.CheckUrl();
    this.myControl.setValue(this.options[this.tap].name);


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter([value]))
    );
  }
  CheckUrl(): void {
    const curUrl = this.router.url;
    if (curUrl === '/main') {
      this.tap = 0;
    }
    else if (curUrl === '/main/parts') {
      this.tap = 1;
    }
    else if (curUrl === '/main/motorcycle') {
      this.tap = 2;
    }
  }


  private _filter(value: any[]): string[] {
    //const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name);
  }

  show_more(): void {
    this.showUlBool = !this.showUlBool;
  }







            //It works good to use it later
  @HostListener('document:click', ['$event'])
  CheckClickOutside(event) {
    let targetElement = event.target as Element;
    if (!targetElement.matches('#drop-a')) {
      targetElement = targetElement.closest('#drop-a') as Element;
    }
    if (targetElement) {
      this.showUlBool = !this.showUlBool;
    }
    else {
      this.showUlBool = false;
    }
  }



  RouteInside(event): void {
    const curTarget = event.currentTarget as Element;
    const queryClass = document.querySelector('.test-class');
    const texte = curTarget.textContent;

    this.rend.removeClass(queryClass, 'test-class');
    this.rend.addClass(curTarget, 'test-class');

          if (texte === 'Osobowe') {
            this.router.navigate(['main']);
          }
          if (texte === 'Części') {
            this.router.navigate(['main/parts']);
          }
          else if (texte === 'Motocykle') {
            this.router.navigate(['main/motorcycle']);
          }
  }


  goToOffers(): void {
    this.router.navigate(['/offers']);
  }
}
