import { Component, OnInit } from '@angular/core';
import {HelpService} from '../services/help.service';
import {Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';

@Component({
  selector: 'app-left-navis',
  templateUrl: './left-navis.component.html',
  styleUrls: ['./left-navis.component.less']
})
export class LeftNavisComponent implements OnInit {
  loginstate: any;

  constructor(private helpservice: HelpService,
              private router: Router,
              private authserv: AuthorizationService) { }

  ngOnInit() {
    this.authserv.authState$.subscribe((state) => {
      this.loginstate = state;
    });
  }
  sharedbool(): void {
    this.helpservice.shareCloseValue(false);
  }
  toMyAccounts(route: string) {
    this.sharedbool();
    this.router.navigate([route]);
  }

  logOut(): void {
    this.authserv.logout();
  }


  toNavigate(bool = false, name?: string, value?: any ) {
    this.helpservice.array.length = 0;
    this.sharedbool();
    this.router.navigate(['offers']);
    if (bool) {
      this.helpservice.PushFilterArray(name, value, '' );
    }
  }


}
