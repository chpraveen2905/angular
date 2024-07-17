import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myAngularProject-1';
  show : boolean = false;
  listItems = [
    {
      name: 'Alex',
      age: 23,
    },
    {
      name: 'Jack',
      age: 25,
    },
    {
      name: 'Ryan',
      age: 27,
    },
    {
      name: 'Shawn',
      age: 24,
    },
    {
      name: 'Bella',
      age: 29,
    },
    {
      name: 'Peter',
      age: 32,
    },
  ];
}