import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  applyVal = {
    color: 'darkgreen',
    'font-style': 'italic',
    'font-size': '35px',
    'font-weight': 'bold',
  };
}