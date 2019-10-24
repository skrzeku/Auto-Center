import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../core-module/services/authorization.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {


  registerform: FormGroup;
  em: any;
  pass: any;

  user: {
    email: '',
    password: ''
  }


  constructor(private authserv: AuthorizationService,
              private formbuilder: FormBuilder,
              private snack: MatSnackBar) {
  }

  ngOnInit() {
this.BuildRegisterForm();

  }
          //just for fun
  register() {
    this.user.email = this.registerform.controls['email'].value;
    this.user.password = this.registerform.controls['password'].value;

    this.authserv.register(this.user)
      .then(success => this.snack.open('register successfuly. Now you can LogIn'))
      .catch(error => this.snack.open(error.message));


 }
      //that's not allowed to make it public

 private BuildRegisterForm() {
    this.registerform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: '',
      last_name: '',
      country: '',
      post_code: '',
      city: '',
      adress: ''
    });
 }

}
