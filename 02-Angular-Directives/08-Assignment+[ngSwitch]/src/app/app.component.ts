import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'myAngularProject-1';
 age : number = 0;
 isEligible : boolean = false;

 checkEligibility(){
  this.isEligible = this.age >=18;
 }
}
