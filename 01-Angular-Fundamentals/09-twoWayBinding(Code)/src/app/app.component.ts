import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'myAngularProject-1';
 staticInput:string = 'Static two-way binding';

 dynamicInput:string = '';
}
