import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDetails = {
    name : 'Alex',
    age : 29,
    location : 'New York'
  };
}
