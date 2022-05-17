import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage!: string;
  //fields/properties
  //fields/properties
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  // Have LoginComponent subscribe to the loginErrorSubject that exists inside of the loginService object
    // Whenever something publishes to the loginErrorSubject, any subscriber will receive that information (callback function
    // will be invoked)
    this.authService.loginErrorSubject.subscribe((errMsg) => {
      this.errorMessage = errMsg;
    });
  }

  loginUser(){
    //1. get login form data from the html form
    const user = this.loginForm.value;
    console.log(user);
    //2. sign user in
    this.authService.login(user.username, user.password);
  }
}
