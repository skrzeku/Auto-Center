import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../core-module/services/authorization.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {


  registerform: FormGroup;


  constructor(private authserv: AuthorizationService,
              private formbuilder: FormBuilder) {
  }

  ngOnInit() {
this.BuildRegisterForm();

  }
          //just for fun
 Register() {

 }
      //that's not allowed to make it public

 private BuildRegisterForm() {
    this.registerform = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      first_name: '',
      last_name: '',
      country: '',
      post_code: '',
      city: '',
      adress: ''
    });
 }

}
