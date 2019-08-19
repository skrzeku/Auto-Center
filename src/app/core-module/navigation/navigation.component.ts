import {AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  Shownnavi: boolean;
  @Output() showoutput = new EventEmitter<boolean>();
  @ViewChild('nav') nav: ElementRef;

  mynav: any;


  constructor(private rend: Renderer2) { }

  ngOnInit() {

  }
  ngAfterViewInit () {
    this.mynav = this.nav.nativeElement;
    console.log(this.mynav);
  }

  sendOutput(): void {
   this.Shownnavi = true;
    this.showoutput.emit(this.Shownnavi);
  }


  // (click)="Shownnavi = !Shownnavi"








}
