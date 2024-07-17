import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'myAngularProject-1';
 isShift(event:any){
  if(event.shiftKey && event.key === 'Y'){
    console.log('Shift + Y is pressed',event);
  }
 }
}
