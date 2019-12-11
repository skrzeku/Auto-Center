import {AfterViewInit, Component, ElementRef, HostListener, Input, Renderer2, ViewChild} from '@angular/core';
import {NavigationComponent} from './core-module/navigation/navigation.component';
import {HelpService} from './core-module/services/help.service';
import {fadeAnimation} from './start/animation/fadeIntRoute';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [fadeAnimation]
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  constructor (private rend: Renderer2,
               private helpservice: HelpService) {}

  shownnaviboolean: boolean = false;

  @ViewChild('navichild') navichild: NavigationComponent;
  @Input() shownnavis: boolean;
  @ViewChild('insideElement') insideElement: ElementRef;
  @ViewChild('navig') navig: ElementRef;

  ngAfterViewInit() {
    this.helpservice.mybol$.subscribe((val) =>{
      this.shownnaviboolean = val;
      console.log(this.shownnaviboolean);
    });
  }

/* longer way!!
  @HostListener ('document:click', ['$event.target'])

  public onClick(targetElement) {
    const clickedInside = this.insideElement.nativeElement.contains(targetElement);
    const anotherclicked = this.navig.nativeElement.contains(targetElement);
    if (!clickedInside && !anotherclicked) {
      this.shownnaviboolean = false;
    }
    else {
      console.log(this.shownnaviboolean);
      this.shownnaviboolean = true;
    }
    event.stopPropagation();
    event.preventDefault();
  }
*/
  showoutputs($event) {

      this.shownnaviboolean = $event;

  }

  //It works good to use it later
/*
  @HostListener('document:click', ['$event'])
  CheckClickOutside(event) {
    let targetElement = event.target as Element;
    const el = document.querySelector('.left-navi') as Element;
    if (!this.shownnaviboolean) {
        if (!targetElement.matches('#navi-bars' )){
          targetElement = targetElement.closest('#navi-bars') as Element;
        }
                if (targetElement) {
                  this.shownnaviboolean = true;
                }
                else {
                  console.log('!targetElement');
                }
    }
    if (this.shownnaviboolean) {
      if (!targetElement.matches('.left-navi' )){
        targetElement = targetElement.closest('.left-navi') as Element;
      }
      if (targetElement !== el ) {
        this.shownnaviboolean = false;
      }
      else {
        console.log('cos');
      }

    }
  }

*/


  Hideleftnavi($event): void {
    this.shownnaviboolean = false;
    if (this.shownnaviboolean) {
      $event.stopPropagation();
      $event.preventDefault();
    }
    else return;
  }

}
