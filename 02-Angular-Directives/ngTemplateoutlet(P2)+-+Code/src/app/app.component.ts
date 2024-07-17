import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees = [
    {id : 1, name : 'Jacob', salary : 45000},
    {id : 2, name : 'Danny', salary : 50000},
    {id : 3, name : 'Harry', salary : 65000}
  ];
}