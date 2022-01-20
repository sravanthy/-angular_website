import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  firstName?:string;
  lastName?:string;
  age?:number;
  newsLetter?:boolean;
  gender?:string;
  country?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
