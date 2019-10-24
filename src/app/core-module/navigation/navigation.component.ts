import {AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {HelpService} from '../services/help.service';
import {AuthorizationService} from '../services/authorization.service';
import {Router} from '@angular/router';

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
  bool;


  constructor(private rend: Renderer2,
              private helpservice: HelpService,
              private authserv: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    this.authserv.authState$.subscribe((auth) => {
      this.bool = auth;
      console.log(this.bool);
    });


  }
  ngAfterViewInit () {
    this.mynav = this.nav.nativeElement;
    console.log(this.mynav);
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

  // (click)="Shownnavi = !Shownnavi"








}
