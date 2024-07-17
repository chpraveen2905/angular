import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'myAngularProject-1';
 inputVal:string = '';
 dynamicVal:string = '';
 
 show(){
  this.dynamicVal = this.inputVal;
 }
}
