import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../core-module/services/authorization.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Client} from '../../core-module/models/client.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {


  registerform: FormGroup;

  client: Client;

  user = {
    email: '',
    password: ''
  };


  constructor(private authserv: AuthorizationService,
              private formbuilder: FormBuilder,
              private snack: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
this.BuildRegisterForm();

  }
          //just for fun
  register() {
    const rand = Math.round(Math.random() * 1000);
    this.registerform.controls['id'].setValue(rand);


    this.user.email = this.registerform.controls['email'].value;
    this.user.password = this.registerform.controls['password'].value;

    this.authserv.register(this.user)
      .then(success => this.success())
      .catch(error => console.log(error.message));
 }
 private success(): void {
   this.authserv.addUser(this.registerform.value).then(() => {
     this.authserv.logout().then(() => {
       this.router.navigate(['login']);
     });
   });
   this.snack.open('register successfuly. Now you can LogIn', 'close', {panelClass: ['error_snackbar']});
 }
      //that's not allowed to make it public

 private BuildRegisterForm() {
    this.registerform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      country: ['', Validators.required],
      post_code: ['', Validators.required],
      city: ['', Validators.required],
      adress: '',
      id: '',
      key: ''
    });
 }

}
