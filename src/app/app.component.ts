import {AfterViewInit, Component, ElementRef, HostListener, Input, Renderer2, ViewChild} from '@angular/core';
import {NavigationComponent} from './core-module/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  constructor (private rend: Renderer2) {}

  shownnaviboolean: boolean = false;

  @ViewChild('navichild') navichild: NavigationComponent;
  @Input() shownnavis: boolean;
  @ViewChild('insideElement') insideElement: ElementRef;
  @ViewChild('navig') navig: ElementRef;

  ngAfterViewInit() {
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
    console.log($event);
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
