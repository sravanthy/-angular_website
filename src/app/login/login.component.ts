import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(){
    this.loginForm = this.formBuilder.group({
      uname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      psw: new FormControl('',[Validators.required,Validators.minLength(3)])
    });
  }

  loginSubmit(){
    if(this.loginForm.dirty){
this.router.navigateByUrl("/home");
      console.log("Valid Form");
    }
    else
    console.log("Invalid Form");
  }

}
