import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../core-module/services/authorization.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authserv: AuthorizationService,
              private router: Router,
              private snack: MatSnackBar) { }

  ngOnInit() {
  }


  SingIn() {
    console.log(this.user);
    this.authserv.login(this.user)
      .then(lol => this.router.navigate(['myaccount']))
      .catch(error => this.snack.open(error.message));
  }

  GoToDealer() {
    this.router.navigate(['login/dealer']);
  }
  gotoRegister() {
    this.router.navigate(['login/register']);
  }

}
