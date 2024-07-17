import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  inputValue: string = 'New Value';

  // constructor(){
  //   console.log("Calling from constructor -",this.inputValue);
  // }
}
