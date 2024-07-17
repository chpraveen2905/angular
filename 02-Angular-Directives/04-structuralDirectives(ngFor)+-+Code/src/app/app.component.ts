import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'myAngularProject-1';
 fullStackDev = [{
  id : 1,
  name : 'Angular'
 },
 {
  id : 2,
  name : 'React'
 },
 {
  id : 3,
  name : 'Node.js'
 },
 {
  id : 4,
  name : 'MongoDB'
 }];
}
