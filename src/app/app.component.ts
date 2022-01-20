import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';//Interpolation binding
  color1="green";//Property binding
  fruit ='';
  changeColor(){//Event binding
    if(this.color1 === "green"){
    this.color1="red";
    this.fruit='APP';}
    else {
    this.color1="green";
    this.fruit='GUA';
    }

  }
}
