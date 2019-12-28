import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  gotoTwitter(): void {
    window.open('https://twitter.com');
  }
  gotoFacebook(): void {
    window.open('https://www.facebook.com');
  }
  gotoInstagram(): void {
    window.open('https://www.instagram.com');
  }

}
