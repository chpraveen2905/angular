import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularProject-1';
  hasText : boolean = false;

  textInput(e:any){
    this.hasText = e.target.value !=='';
  }
}
